import profilePic from './assets/image1.jpeg'
function Card(){
    return(
      <div className="card">
        <img className="card-img" src={profilePic}alt="This is my profile picture" />
        <h2 className="card-title">Arpan Upreti</h2>
        <p className="card-text">Hello, I study computer science</p>
      </div>  
    );
}
export default Card