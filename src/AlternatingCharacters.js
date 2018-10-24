export const AlternatingCharacters = (arr) => (
  arr.map(str =>
    str.split("").reduce((count, char, i) => {
      if (char === str[i + 1]) { count++ }
      return count
    }, 0)
  )
)
