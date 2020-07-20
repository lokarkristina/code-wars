// ? 6kyu: IPv4 to int32
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

// Instructions
// Take the following IPv4 address: 128.32.10.1 This address has 4 octets
// where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent
// it as the 32 bit number: 2149583361.

// Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that
// takes an IPv4 address and returns a 32 bit number.

//   ipToInt32("128.32.10.1") => 2149583361

// Solution - NOT YET
const ipToInt32 = (ip) => {};

// Sample Tests
Test.assertEquals(
    ipToInt32('128.32.10.1'),
    2149583361,
    'wrong integer for ip: 128.32.10.1'
);