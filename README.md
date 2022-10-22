# ABC news

A news source for the cool kids!

### Soheil Sisakht
##### Live demo:
- [abc-roan.vercel.app](http://abc-roan.vercel.app/) 
- [abc.amp.aws](http://abc-roan.vercel.app/)
##### Tech used:
- Next (v12.3.1) - TypeScript (v4.8.4) - Chakra (v2.3.6) 
- Amplify - GitHub CI/CD


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

There are three improvements to the model in the 
task,
1. `content` is now an `string[]`, and each of 
it's children are paired with one of `assets` 
children. 
2. `tags` is now an `string[]` as well, and they 
are shown in a row of chips.
3. Added a new `summary` property that gives a short
string, and in each UI it's displayed differently.

Below is the revised model

``` js
{ 
  "title": STRING, 
  "summary": STRING,
  "content": ARRAY, 
  "category": STRING, 
  "tags": ARRAY, 
  "author": STRING, 
  "assets": ARRAY,
  "template_id": INTEGER, 
}
```















