import { OrdersFeedLine } from "../../components/orders-feed-line/orders-feed-line";
import { OrdersFeedStatusLine } from "../../components/orders-feed-status-details/orders-feed-status-details";

const FeedPage = () => {
    return <div style={{width: '100%', height: '100%', display: 'flex'}}>
        <div style={{width: '50%'}}>
            <OrdersFeedLine />
        </div>
        <div style={{width: '50%'}}>
            <OrdersFeedStatusLine />
        </div>
    </div>
}

export default FeedPage;