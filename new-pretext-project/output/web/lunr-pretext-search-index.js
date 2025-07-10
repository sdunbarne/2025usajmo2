var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Steven R. Dunbar    As a learning experience in elementary number theory, this is a detailed investigation into Problem 2 on the 2025 USAJMO. Furthermore, as an addtional learning experience, I am writing this exposition in PreTeXt.   "
},
{
  "id": "problem",
  "level": "1",
  "url": "problem.html",
  "type": "Section",
  "number": "1",
  "title": "Problem Statement",
  "body": " Problem Statement  The following problem appeared as Problem 2 on the 2025 USA Junior Mathematical Olympiad.  Problem: Let and be positive integers. Prove that there exists a positive integer such that for every odd integer , the digits in the base representation of are all greater than .  "
},
{
  "id": "examples",
  "level": "1",
  "url": "examples.html",
  "type": "Section",
  "number": "2",
  "title": "Preliminary Examples",
  "body": " Preliminary Examples  Let and . The proofs later will show that taking and an odd integer greater than , say , then all the digits of in base- are greater than . This really means expressing . The digits are greater than . Note that the final digit of in base- is itself. This will be proved to be true in general in the later sections.  On the other hand, consider the even number greater than . Then epressed in base- is and the last digit  fails to be greater than .  As some further examples, consider the following table of odd numbers raised to some low powers and then expressed in base- . The expressions have their digits expressed as decimal numbers, with a digit in parentheses if the base is greater than . Note that as expected the final digit is always . Furthermore the digits are increasing, so it might be suspected that given and there is some such that for , the digits of are greater than .   Sample expansions to illustrate the hypothesis.                     2  3  6  9  13    2  5  10  25  25    2  7  14  49  37    2  9  18  81  49    2  11  22  121  5(11)    3  3  6  27  043    3  5  10  125  125    3  7  14  343  1(10)7    3  9  18  729  249    3  11  22  1331  2(16)(11)    3  13  26  2197  36(13)    3  15  30  3375  3(22)(15)     "
},
{
  "id": "examples-5",
  "level": "2",
  "url": "examples.html#examples-5",
  "type": "Table",
  "number": "2.1",
  "title": "Sample expansions to illustrate the hypothesis.",
  "body": " Sample expansions to illustrate the hypothesis.                     2  3  6  9  13    2  5  10  25  25    2  7  14  49  37    2  9  18  81  49    2  11  22  121  5(11)    3  3  6  27  043    3  5  10  125  125    3  7  14  343  1(10)7    3  9  18  729  249    3  11  22  1331  2(16)(11)    3  13  26  2197  36(13)    3  15  30  3375  3(22)(15)    "
},
{
  "id": "notation",
  "level": "1",
  "url": "notation.html",
  "type": "Section",
  "number": "3",
  "title": "Notation",
  "body": " Notation  I use the following notation throughout this article:   denotes the digit of in the place, and   denotes the base number which is the truncation of at the rightmost digits.  Note that obviously , so has at most digits in places down to the units place when expressed in base . I find it mathematically clearer to write in base as . The goal is to prove that there is a positive integer such that for every odd the coefficients satisfy for all .  For a real number , write for the greatest integer less than and for the fractional part of . For integers and , let be the remainder left by division of by .  "
},
{
  "id": "firstsolution",
  "level": "1",
  "url": "firstsolution.html",
  "type": "Section",
  "number": "4",
  "title": "First Solution",
  "body": " First Solution  Note that obviously , so has at most digits when expressed in base or equivalenty the power sum will have at most terms from power down to . Note that some of the leading digits or highest power coefficients may be zero. An example is and , where .  The first claim is that . The proof is by induction. The base case is , where is trivially true. The inductive step starts with . Since is odd, for some . Then is also true. The inductive step is complete. A conclusion drawn from this fact is that the units digit is always .  Keeping with the established notation, denotes the digit of in the place, so in the power sum form and denotes the base number which is the truncation of at the rightmost digits, so for each .  Note that has only terms of power and higher. Then divides . That is, or equivalently for some integer . That is divides . Because , and therefore .  Now if , then . But this means the digit in the place is at least . Since this is true for all with , the problem is finished.  In summary, given and , take so that for every odd all the digits in the base expansion of are greater than .   "
},
{
  "id": "secondsolution",
  "level": "1",
  "url": "secondsolution.html",
  "type": "Section",
  "number": "5",
  "title": "Second Solution",
  "body": " Second Solution  Following the first four paragraphs of the First Solution, recall that divides . Denote . Recall that the units digit is so and therefore . We have .  As noted in the First Solution , so has at most digits when expressed in base . So we may always assume . If , then as desired.  Another way to prove is to first to recall that and . Then . But , so . Then the proof proceeds as before.  "
},
{
  "id": "thirdsolution",
  "level": "1",
  "url": "thirdsolution.html",
  "type": "Section",
  "number": "6",
  "title": "Third Solution",
  "body": " Third Solution  This solution will prove an explicit formula for the digits in the base expansion of , specifically . Note that once this is established, then because it follows that . Establishing this fact will finish the proof because if , then .  For any with       The proof is by downward induction on . When , the statement is which is true.  Suppose the statement holds for . Then using the induction hypothesis . The last step used the identity .  Notice that if is an integer and is a real number then .  Using this identity further simplifies to This completes the induction step.       "
},
{
  "id": "lemma-digits",
  "level": "2",
  "url": "thirdsolution.html#lemma-digits",
  "type": "Lemma",
  "number": "6.1",
  "title": "",
  "body": " For any with       The proof is by downward induction on . When , the statement is which is true.  Suppose the statement holds for . Then using the induction hypothesis . The last step used the identity .  Notice that if is an integer and is a real number then .  Using this identity further simplifies to This completes the induction step.     "
},
{
  "id": "fourthsolution",
  "level": "1",
  "url": "fourthsolution.html",
  "type": "Section",
  "number": "7",
  "title": "Fourth Solution",
  "body": " Fourth Solution  This solution is by induction on the power with the multiplication algorithm. This solution will prove that if the base- digits of are all at least then the base- digits of are all at least .  The concept of this solution is simple. Multiply using the elementary school multiplication algorithmin in base . If every digit of is at least , then every carry is between and . Therefore every digit of the product is of the form where is either or , that is, times a digit , and . In particular, every digit is at least . Note that in particular, it is necessary to recognize that each carry is at most . If carried over to an odd digit of , then the corresponding digit of would be which is less than .  The base case is true if . That is, for an odd integer the base- representation of which will be the single digit  which then satisifies .    Multiplication   Let the base- digits of be . In other words, and . Iteratively define the digits of as with carries as , , and . Then   for each .   for each .          The first item is true by definition since is a remainder modulo .  Prove the second item by induction on . The base case is true since and then if  , establishing the induction step.  To prove the third item, let . By induction on , . Since and , this implies , completing the proof.       Apply the lemma to with digits . Sppose that for all . Multiplying with digits and carries . Then since . On the other hand, if , then so all carries are at least . But is either or , so which means that is between and so .  As an alternative argument, if the base- digits of are and the digits of are , then multiplying by gives the base- number . If one of th digits , then when multiplying it by , the carry is at most , so which contradicts .  "
},
{
  "id": "fourthsolution-5-1",
  "level": "2",
  "url": "fourthsolution.html#fourthsolution-5-1",
  "type": "Lemma",
  "number": "7.1",
  "title": "Multiplication.",
  "body": " Multiplication   Let the base- digits of be . In other words, and . Iteratively define the digits of as with carries as , , and . Then   for each .   for each .          The first item is true by definition since is a remainder modulo .  Prove the second item by induction on . The base case is true since and then if  , establishing the induction step.  To prove the third item, let . By induction on , . Since and , this implies , completing the proof.     "
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
