const StarRating = ({rating}) =>{
    const totalStars = 5;
    const RenderStars = () =>{
        let stars = [];
        for(let i = 0 ; i < totalStars; i++){
            if(rating > i){
                stars.push(
                <span key = {i} className="text-yellow-400 font-normal text-4xl">&#9733;</span>
            );
            }
            else{
                stars.push(
                    <span key = {i} className="text-gray-300 font-normal text-4xl">&#9733;</span>
                );
            }
        
        }
        return stars;
    };
    return <div>{RenderStars()}</div>

};
export default StarRating