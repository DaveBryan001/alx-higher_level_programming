#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0
    score = 0
    total = 0
    for val, weight in my_list:
        score += val * weight
        total += weight
    return (score / total)
