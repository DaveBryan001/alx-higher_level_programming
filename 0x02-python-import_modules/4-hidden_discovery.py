#!/usr/bin/python3
if __name__ == "__main__":
    from hidden_4 import *
    na = dir()
    for i in range(0, len(na)):
        if na[i][:2] != "__":
            print("{:s}".format(na[i]))
