#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    newdict = a_dictionary.copy()
    list_keys = list(newdict.keys())
    for i in list(newdict.keys()):
        newdict[i] *= 2
    return (newdict)
