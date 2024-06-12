#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pprint import pprint
import json

def getEventResult(event: dict) -> list[dict]:
    scores: list[dict] = event['scores']

    scores.sort(key=lambda x : x['strokes'])

    numPlayers = len(scores)
    count = 0

    eventScore: list[dict] = []

    for score in scores:
        playerScore = {
            'points': numPlayers-count,
            'place': count+1,
            'player': score['player'],
            'strokes': score['strokes']
        }
        count+=1

        eventScore.append(playerScore)

    for ind in range(1, len(eventScore)):
        if eventScore[ind]['strokes'] == eventScore[ind-1]['strokes']:
            eventScore[ind]['place'] = eventScore[ind-1]['place']
            if isinstance(eventScore[ind-1]['points'],int):
                eventScore[ind-1]['points']-=0.5
            
            eventScore[ind]['points'] = eventScore[ind-1]['points']

    return eventScore

def getEventResults(events: list[dict]) -> list[dict]:
    for event in events:
        event['results'] = getEventResult(event)
    return events

def getEventId(event: dict) -> dict:
    return {
        'name':event['name'],
        'date': event['date'],
        'id': event['id']
    }

def getPlayerScores(events: list[dict]) -> list[dict]:
    playerScores = {}

    for event in events:
        for result in event['results']:
            if result['player']['name'] not in playerScores:
                playerScores[result['player']['name']] = {
                    'player': result['player'],
                    'totalPoints': result['points'],
                    'totalStrokes': result['strokes'],
                    'events': [getEventId(event)],
                    'scores': [result]
                }
            else:
                playerScores[result['player']['name']]['totalPoints'] += result['points']
                playerScores[result['player']['name']]['totalStrokes'] += result['strokes']
                playerScores[result['player']['name']]['events'].append(getEventId(event))
                playerScores[result['player']['name']]['scores'].append(result)
    
    return [v for _,v in playerScores.items()]

def getScoreLeader(scoreBoard: list[dict],
                   events: list[dict]) -> list[dict]:
    numEvents = len(events)

    scoreLeaderboard : list[dict] = []

    for playerScore in scoreBoard:
        pts = (playerScore['totalPoints'] / numEvents + 0.05*len(playerScore['events']))
        scoreLeaderboard.append({
            'player': playerScore['player'],
            'score': pts,
            'numberOfEvents': len(playerScore['events'])
        })

    return scoreLeaderboard

def main():
    parser = argparse.ArgumentParser(description='Read tour data and get scores',
                                     formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    
    parser.add_argument('-f', '--file',
                        help='Path to the tour data file',
                        type=str,
                        dest='file',
                        required=True)
    
    parser.add_argument('-o', '--output-file',
                        help='Path to the output data file',
                        type=str,
                        dest='output_file')
    
    args = parser.parse_args()

    fd = open(args.file, 'r')

    data = json.load(fd)

    courses = data['courses']
    events = data['events']
    players = data['players']

    events = getEventResults(events)

    data['scoreBoard'] = getPlayerScores(events)
    data['leaderboard'] = getScoreLeader(data['scoreBoard'],
                                         events)

    if args.output_file is not None:
        fd = open(args.output_file, 'w')

        json.dump(data, fd, indent=4)

if __name__ == '__main__':
    main()