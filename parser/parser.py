'''
This is a terrible parser used to test different methods of extracting
questions in JSON format from the given input documents.
'''


import re
import json

FILENAME = 'input.txt'
SEPARATORS = 'A[.] | B[.] | C[.] | D[.] | E[.] | F[.] | G[].] | H[.]'
ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

f = open(FILENAME, "r")
questions = f.readlines()

payload = []

# parse each questions
for q in questions:
    foo = re.split('[.] ', q, 1)  # split id from rest
    q_id = int(foo[0])
    rest = foo[1]

    split_q = re.split(SEPARATORS, rest)
    q_text = split_q[0].strip()
    ans = []
    for e in split_q[1:]:
        ans.append(e.strip())

    data = {}
    data['id'] = q_id
    data['text'] = q_text

    choices = {}
    for idx, a in enumerate(ans):
        choices[ALPHA[idx]] = a

    data['answers'] = choices

    q_json = json.dumps(data, indent=4, sort_keys=True)
    print(q_json)
    print(',')
    payload.append(q_json)
