# Check if two words are anagrams
# Example:
# find_anagrams("hello", "check") --> False
# find_anagrams("below", "elbow") --> True


def find_anagram(word, anagram):
    # [assignment] Add your code here

    # change both word and anagram to lower case
    word1 = word.lower()
    anagram1 = anagram.lower()

    # check if their lengths are the same
    if (len(word1) != len(anagram1)):
        return False
    else:
        # sort word and anagram
        sortedWord = sorted(word1)
        sortedAnagram = sorted(anagram1)

        # compare if sorted items are the same
        if (sortedWord == sortedAnagram):
            return True
        else:
            return False

    return True
