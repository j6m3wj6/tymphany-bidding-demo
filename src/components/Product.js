import React, { useEffect } from 'react'
import axios from 'axios'
import moment from 'moment' 
import { 
  Image, 
  Icon,
  Button,
  Divider,
  Grid,
  Form,
  List,
  Header
} from 'semantic-ui-react'


const BiddingInfo = (props) => {
  const [info, setInfo] = React.useState({name: '', number: '', email:'', price: ''});
  const handleChange = (e , { name, value }) => {
    const newInfo = info;
    newInfo[name] = value;
    setInfo(newInfo);
  }
  const handleSubmit = async () => {
    // let completeInfo = true;
    // Object.values(info).forEach(element => {
    //   if (element.length == 0) completeInfo=false;
    // });
    // const updateData = {
    //     _no: props._no,
    //     updateContent: {
    //         bidding: {
    //             ...info,
    //             time: Date.now()
    //         }
    //     }
    // }
    // if (completeInfo) submitBidding(updateData)
    // else console.log("not complete")
  }
  const submitBidding = async (data) => {
    return await axios.post('https://tymphany-bidding-server.herokuapp.com/api/bidding', 
      data, 
      {'Content-Type': 'application/json'})
        .then((response) => {
          props.submitFinish();
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
  }
  return (
    <Grid horizontal >
      <Form success style={{  margin: '30px auto' }} >
      <Form.Field>
        <label id='movie'>姓名 (Name)</label>
        <Form.Input
          required={true}
          // error={'error'}
          
          placeholder='Tong Wang'
          name='name'
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>工號 (EmployeeID)</label>
        <Form.Input
          required={true}
          pattern="[0-9]{7}"
          placeholder='2000xxx'
          name='number'
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Email </label>
        <Form.Input
          required={true}
          type='email'
          placeholder='tong.wang@tymphany.com'
          name='email'
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>出價 (Bidding Price) </label>
        <Form.Input
          required={true}
          pattern="([50]|[00]{2})\w+"
          placeholder='tong.wang@tymphany.com'
          name='price'
          onChange={handleChange}
        />
      </Form.Field>
      
      {/* <Message
        success
        header='Form Completed'
        content="Check the bidding status"
      /> */}
      
      <Button type='submit' onClick={handleSubmit}>Submit</Button>
    </Form>
    </Grid>
  )
}

const DetailInfo = (props) => {

  return (
    <>
      <div className='detail'>
        <span className='conditions'><strong> Check: </strong>{props.data.conditions}</span>
        <p className='shortage'><strong> Shortage: </strong> {props.data.shortage}</p>
      </div>
      <Divider horizontal>History</Divider>
      <List divided relaxed className='bidding'>
        {props.biddingData.length > 0 && props.biddingData.map((_d, index) => {
          return(
            <List.Item>
              <List.Content floated='right'>
                  <h5 className='bidding-name'>${_d.price}</h5>
              </List.Content>
              <List.Icon name='dollar' size='large' verticalAlign='middle' />
              
              <List.Content>
                  <h5 className='bidding-name'>{_d.name}</h5>
                  <p className='bidding-time'>{moment(_d.time).format("MMMM Do YYYY, h:mm:ss a")}</p>
                
              </List.Content>
              
              
            </List.Item>
          )
        })} 
      </List>
    </>
  )
}

function Product(props) {
  const dataLength = props.data.length? props.data.length : 0;
  const [showDetail, setDetail] = React.useState(-1);
  const [showBid, setBid] = React.useState(-1);
  
  const handleOnClickDetail = (event) => {
    // console.log(event.target.name)
    setDetail(event.target.name)
    setBid(-1)
  }
  const handleOnClickBid= (event) => {
    // console.log(event.target.name)
    setBid(event.target.name)
    setDetail(-1)
  }
  const chevronUp = () => {
    setBid(-1)
    setDetail(-1)
  }
  
  const submitFinish = () => {
    setBid(-1)
  }

  const Card = ({data, index} ) => {
    const biddingData = data.bidding
    biddingData.sort(function(a, b) {
        return (b.price - a.price)
    });
    const heighestPrice = biddingData.length>0? `即時出價 $ ${biddingData[0].price}`: '尚未有人出價'
    return (
      <div className='tg_card' >
        <div className='img-content'>
          <Image className='img' centered src={process.env.PUBLIC_URL+ `/img/${data._no}.jpg`}/>
        </div>
        <div style={{ height: 'fit-content' }}>
          <h5 className='brand'> {`#${data._no} ${data.module}`}</h5>
          <p>{data.brand}</p>
          {data.set.length>0 && <p className='set'>set with: {data.set}</p>}
        </div>
        <Divider />
        <div>
          <p className='price-title'> {heighestPrice}</p>
        </div>
        <div className='operations-buttons'>
          <Button inverted color='blue' className='operation-button' name={index} onClick={handleOnClickDetail}> Detail </Button>
          <Button inverted color='red' className='operation-button' name={index} onClick={handleOnClickBid}> Bid </Button>
          {(index == showDetail || index == showBid) && <Icon name="chevron up" bordered style={{minWidth: '30px', margin: 'auto', borderRadius: '3px'}} onClick={chevronUp}/>}
        </div>
        {index == showDetail && <DetailInfo data={data} biddingData={biddingData} />}
        {index == showBid && <BiddingInfo _no={data._no} submitFinish={submitFinish}/>}
      </div>   
    )
  }

  return (
    <>
    {dataLength > 0? 
      props.data.map((_d, index) => 
        <Card data={_d} index={index} />)
      :
      <>

      </>
    }
    </>
    
  );
}

export default Product;