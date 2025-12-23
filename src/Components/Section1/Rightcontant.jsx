import Rightcard from "./Rightcard"


const Rightcontant = (props) => {
  console.log(props.users);
  
  
  
  return (
    <div id="right" className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10  p-6 w-2/3  ' >
      {props.users.map(function(elem ,idx){

        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}  />
      })}
    </div>
  )
}

export default Rightcontant