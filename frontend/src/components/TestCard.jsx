import {Card} from "antd";

function TestCard() {

  return (
    <>
       <Card

        title={
            <div className="flex items-center gap-5">
                <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/1.png`} alt='logo' width="50"/>
                <span className="text-2xl">Title</span>
              </div>
     }
        variant="borderless"
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}

export default TestCard
