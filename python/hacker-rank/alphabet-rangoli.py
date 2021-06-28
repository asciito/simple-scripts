def print_rangoli(size):
    a      = ord('a')
    output = ''
    piramid = []

    if (0 >= size or size > 26):
        print('')
    elif (size == 1):
        print('a')
    else:
        for c in range(a + size - 1, a - 1, -1):
            output = chr(c) + output
            piramid.append((output[len(output):0:-1] + output).center(size + size - 1, '-'))
        
        for step in piramid[len(piramid) - 2::-1]:
            piramid.append(step)
        
        for char in [*piramid]:
            print(*char, sep="-")

if __name__ == '__main__':
    n = int(input('Introduce el tamaño: '))
    print_rangoli(n)