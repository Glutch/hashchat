'use strict'

const hashtagRegex = /(^|\s)#\w+(?=$|\s)/g

const matchHashtags = str => {
  const hashtags = (str.match(hashtagRegex) || [])
    .map(ht => ht.trimLeft())
    .map(ht => ht.substr(1, ht.length))

  const hashtagsLower = hashtags
    .map(ht => ht.toLowerCase())

  return hashtags
    .filter((ht, i) => hashtagsLower.indexOf(ht.toLowerCase()) === i)
    .slice(0, 1)
}

matchHashtags.hashtagRegex = hashtagRegex

module.exports = matchHashtags