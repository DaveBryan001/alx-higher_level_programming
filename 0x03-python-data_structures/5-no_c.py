#!/usr/bin/python3
def no_c(my_string):
    filtered_string = ""
    for char in my_string:
        if char.lower() != 'c':
            filtered_string += char
    return filtered_string
