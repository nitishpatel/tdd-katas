Write a pair of functions that can convert a number from and to its
Roman Numeral representation.
I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XX, XL, XLV, XC, XCI, XCIX
1999 = MCMXCIX
3999 = MMMCMXCIX
Repeatable: I, X, C, M, Repetition only 0-3 times
Subtractable: I, X, C
Constraints: Subtraction only from one of the next two (I only from V and
X): IV, IX, XL, XC, CD, CM
0: Empty String
I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

Your ZOMBIES Path for Roman Numerals:
Z - Skip (no zero in Roman numerals)
O - One: 1→I 
M - Many: 2→II, 3→III 
M - New symbol: 5→V, 6-8→VI-VIII 
 