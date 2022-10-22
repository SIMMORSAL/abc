# ABC news

A news source for the cool kids!

### Soheil Sisakht
##### Live demo: abcnews...
##### Tech used:
- Next - TypeScript - Chakra | Amplify - GitHub CI/CD
// TODO add versions

This is my application for the article showing 
system challenge. 

Landing page begins with two article options on 
the screen that each point to their urls:  
`website.com/article/1 (or 2)`

For each number, a different UI is shown. Each 
of them essentially contain the same set of features,
however with differing colors and placements.  
In case any other number is put in the url, an 
error message will be diplayed.

There are two improvements to the model in the 
task,
1. `content` is now an `string[]`, and each of 
it's children are paired with one of `assets` 
children. 
2. `tags` is now an `string[]` as well, and they 
are shown in a row of chips.

Below is the revised model

``` js
{ 
  "title":STRING, 
  "content":ARRAY, 
  "category":STRING, 
  "tags":ARRAY, 
  "author":STRING, 
  "assets":ARRAY,
  "template_id":INTEGER 
}
```















