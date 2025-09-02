# TDD KATAS 

Create a class with one method called ValidateIpv4Address. The method takes a string and return true if it is valid host assignable IP address and false if not.

IPv4 addresses are 32 bits long and grouped into 4 one byte blocks separated by dotted-decimal notation. E.g. 192.168.1.1.

Most IP addresses ending in 0 represent the entire network segment and cannot be used as host addresses. And most IP addresses ending in 255 represent a broadcast address and cannot be used as a host address. There are exceptions, when using subnets, for the sake of this Kata any address ending in 0 or 255 is not a valid host address.

## NOTE
DO NOT USE REGULAR EXPRESSIONS TO SOLVE THIS KATA.