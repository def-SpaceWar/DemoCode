import sys


def func(parameters):
    return str(parameters)


class MyClass(object):
    def __init__(self):
        super().__init__()
    
    def do_something(self):
        print(self)


abc = [1, 2, 3]
for elem in abc:
    print(elem)

sys.exit()
