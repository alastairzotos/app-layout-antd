export default function Home() {
  return (new Array(100).fill(0).map((x, i) => (<p key={i}>hello</p>)))
}
