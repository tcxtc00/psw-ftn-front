import React, {useState, useEffect} from 'react'
import './adminReview.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import placeholderImg from '../../assets/user-placeholder.png'
import { feedbackService } from '../../api/FeedbackService';
import { toast } from 'react-toastify'

const AdminReview = () => {
    const navigate = useNavigate();
    const  {state}  = useLocation();

    const [resChangedVisibility, setResChangedVisibility] = useState(null)
    const [reviews, setReviews] = useState(state.reviews)

    const onChangeVisibility = (params) => {
        return async (event) => {
          event.preventDefault()
          try {
            const res = await feedbackService.changeVisibility({...params})
            setResChangedVisibility(res)
            console.log(res)
      
            if(res.status === 200)
            {
              toast.success("Success")
            }
      
          } catch (err) {
            toast.error(err.response.data.message)
            console.log(err.response.data)
          }
        }
      }

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user.data.role;

    useEffect(() => {
        if(role !== 'Admin' || state === null)
        {
            navigate("/");
        }
        window.scrollTo({ top: 0, behavior: 'instant' })
        console.log(state)
      }, [])

      useEffect(() => {
        ;(async () => {
          const responseData = await feedbackService.getAllFeedbacks();
          setReviews([...responseData])
          console.log('allFeedbacks', responseData)
        })()
      }, [setReviews, resChangedVisibility])

  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading-reviews">
          client's <span>review</span>
        </h1>
        <div className="box-container grid-container-reviews">
            {reviews.map((review, index) => (
              <div className="box" key={index}>
              {review.incognito ? <img src={placeholderImg} alt="" /> :
                review.patient.imageUrl !== null ? (
                  <img src={review.patient.imageUrl} alt="" />
                ) : (
                  <img src={placeholderImg} alt="" />
                )}

                {review.incognito ? <h3>Anonimus</h3> : <h3>
                {review.patient.firstName} {review.patient.lastName}
                </h3>}

                <div className="stars">
                  {[...Array(review.grade)].map((e, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <div className='text-container'>
                <p className="text-comment">{review.comment}</p>
                </div>
                {review.isForDisplay ?  
                    <input
                    type="submit"
                    value="Hide"
                    className="btn btn-reviews"
                    onClick={onChangeVisibility({showFeedback: false, feedbackId: review.feedbackId})}
                  /> 
                  : 
                    <input
                    type="submit"
                    value="Show"
                    className="btn btn-reviews"
                    onClick={onChangeVisibility({showFeedback: true, feedbackId: review.feedbackId})}
                    />
                }
              </div>
            ))
        }
            
        </div>
        </section>
        </div>
  )
}

export default AdminReview