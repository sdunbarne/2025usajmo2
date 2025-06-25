var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Steven R. Dunbar    As a learning experience in elementary number theory, this is a detailed investigation into Problem 2 on the 2025 USAMJMO. Furthermore, as an addtional learning experiece, I am writing this exposition in PreTeXt.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Solutions",
  "body": " Solutions   I use the following notation throughout this article:   denotes the digit of in the place, and   denotes the base number which is the truncation of at the rightmost digits.  Note that obviously , so has at most digits when expressed in base . I find it mathematically clearer to write in base as . The goal is to prove that there is a positive integer such that for every odd the coefficients satisfy for all .    First solution  Let denote the remainder when is divided by . Using the standard notation The first equality follows because the division by will make the series expansion with powers less than , so the floor function truncates them off. Then remainder by operation eliminates all but the constant term . The second equality follows by simple division. Now the claim is that is, it is possible to move the remainder operation inside the floor function with appropriate modification.    Second solution  Note that obviously , so has at most digits when expressed in base or equivalenty the power sum will have at most terms from power down to . Note that some of the leading digits or highest power coefficients may be zero. An example is and , where .  The next claim is that . The proof is by induction. The base case is , where is trivially true. The inductive step starts with . Since is odd, for some . Then is also true. The inductive step is complete. The conclusion drawn from this fact is that the units digit is .  Keeping with the established notation, denotes the digit of in the place, so in the power sum form and denotes the base number which is the truncation of at the rightmost digits, so for each .  Note that has only terms of power and higher. Then divides . That is, or equivalently for some integer . That is divides . Now so and therefore .  Now if , then . But this means the digit in the place is at least . Since this is true for all with , the problem is finished.  In summary, given and , take so that for every odd all the digits in the base expansion of are greater than .   A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "subsection-2-8",
  "level": "2",
  "url": "section-1.html#subsection-2-8",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
