
# BinaryGap

![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-green)

A <i>binary gap</i> within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
For example, number 9 has binary representation <tt style="white-space:pre-wrap">1001</tt> and contains a binary gap of length 2. The number 529 has binary representation <tt style="white-space:pre-wrap">1000010001</tt> and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation <tt style="white-space:pre-wrap">10100</tt> and contains one binary gap of length 1. The number 15 has binary representation <tt style="white-space:pre-wrap">1111</tt> and has no binary gaps. The number 32 has binary representation <tt style="white-space:pre-wrap">100000</tt> and has no binary gaps.
Write a function:
<p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>int solution(int N);</tt></p>
that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
For example, given N = 1041 the function should return 5, because N has binary representation <tt style="white-space:pre-wrap">10000010001</tt> and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
Write an <b><b>efficient</b></b> algorithm for the following assumptions:
<ul style="margin: 10px;padding: 0px;"><li>N is an integer within the range [<span class="number">1</span>..<span class="number">2,147,483,647</span>].</li>
</ul>


