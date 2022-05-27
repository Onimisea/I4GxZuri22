# Read text from a file, and count the occurence of words in that text
# Example:
# count_words("The cake is done. It is a big cake!")
# --> {"cake":2, "big":1, "is":2, "the":1, "a":1, "it":1}

def read_file_content(filename):
    # [assignment] Add your code here
    fhandle = open(filename)
    content = ''
    for line in fhandle:
        content += "\n" + line + "\n"

    return content


def count_words():
    counts = dict()

    text = read_file_content("./story.txt")
    # [assignment] Add your code here
    words = text.split()

    for word in words:
        if word not in counts:
            counts[word] = 1
        else:
            counts[word] = counts[word] + 1

        # counts[word] = counts.get(word, 0) + 1

    return counts
