// Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// 若text=“Abccdeda”

// .toLowerCase()                               将text全变成小写  “abccdeda”

// .split('')  以‘’规则分割                     [‘a’, 'b','c','c','d','e','d','a']

// .sort() 排序                                 ['a','a','b','c','c','d','d','e']

// .join() 将数组中所有元素放在一起 'aabccdde'

// .match(/([^])\1+/g)                          将符合正则的放在新数组中 ['aa','cc','dd']  

// /([^])\1+/g                                  g表示全局，/... /表示正则内容，[^]排除，\1+至少出现一次，，，返回全局中重复出现的

// .length                                      求数组的长度