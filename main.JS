//  2. 정규식 생성
//  ``를 사용하면 띄어쓰기, 줄 바꿈 가능
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
//  생성자
const regexp1 = new RegExp('the', 'gi')
console.log(str.match(regexp1))
//  리터럴
const regexp2 = /the/gi
console.log(str.match(regexp2))


//  3. 메소드
const regexp3 = /fox/gi
console.log(regexp3.test(str))

const regexp4 = /HEROPY/gi
console.log(regexp4.test(str))

console.log(str.replace(regexp3, 'AAA'))
console.log(str)  //  원본 데이터는 대체하지 않음, let으로 사용할 경우 원본 데이터 대체가능


//  4. 플래그(옵션)
const regexp5 = /the/g
console.log(str.match(regexp5))
console.log(str.match(/the/gi))

//  이스케이프 문자(Escape Character)
//  \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
console.log(str.match(/\.$/gi)) //  null  
console.log(str.match(/\.$/gim))  
// m : 각각의 문자 데이터의 끝을 해석하겠다


//  5. 패턴(1)
console.log(
  str.match(/d$/g)
) //  null
console.log(
  str.match(/d$/gm)
) 
console.log(
  str.match(/^t/gm)
)
console.log(
  str.match(/^t/gim)
)

console.log(
  str.match(/./g)
)
console.log(
  str.match(/http/g)
)
console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/fox|dog/g)
)
console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/d{2}/g)
)
console.log(
  str.match(/d{2,}/g)
)
console.log(
  str.match(/d{2,3}/g)
)
// \w :숫자와 알파벳을 포함한
console.log(
  str.match(/\w{2,3}/g)
)
console.log(
  str.match(/\b\w{2,3}\b/g)
)


//  6. 패턴(2)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\b/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)
)
console.log(
  str.match(/\d/g)
)
console.log(
  str.match(/\d{1,}/g)
)
console.log(
  str.match(/\s/g)
)

const h = `  the hello  world   !

`
console.log(
  h.match(/\s/g)
)
console.log(
  h.replace(/\s/g, '')
)

console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)