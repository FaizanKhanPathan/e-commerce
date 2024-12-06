import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { dateformat } from '@/lib/utils'
import { getAllPayments } from '@/store/admin/admin-common-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Payments = () => {
  const dispatch = useDispatch()
  const paymentList = useSelector((state) => state?.adminCommonData?.paymentList)

  const confirmPayment = paymentList?.filter((ele) => ele?.paymentStatus == "paid")


  // Calculate total earnings
  const totalEarnings = confirmPayment?.reduce((total, payment) => {
    return total + parseFloat(payment?.amount || 0);
  }, 0);


  useEffect(() => {
    dispatch(getAllPayments());
  }, [dispatch]);
  return (
    <div>
      {/* <div className='flex justify-start items-center gap-5'>
        <Card className="p-5">
          <h1>Total earnings</h1>
          <p className='text-center'>$0.00</p>
        </Card>
      </div> */}
      <div>
        <Card>
          <CardHeader>
            <div className='flex justify-between items-center'>
              <CardTitle>All Payments</CardTitle>
              <>
                <div>
                  <h1>Total earnings</h1>
                  <p>$ {totalEarnings.toFixed(2)}</p>
                </div>
              </>
            </div>
          </CardHeader>


          <Table>
            <TableHeader >
              <TableRow >
                <TableHead>Payment ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>User name</TableHead>
                <TableHead className="text-nowrap">Phone</TableHead>
                <TableHead className="text-nowrap">Amount</TableHead>
                <TableHead className="text-nowrap">Payment status</TableHead>
                <TableHead className="text-nowrap"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                paymentList && paymentList?.length > 0 ? <>
                  {
                    paymentList?.map((payment) => {
                      return <TableRow>
                        <TableCell>{payment?._id}{payment?.paymentId}</TableCell>
                        <TableCell>{dateformat(payment?.orderDate)}</TableCell>
                        <TableCell className="text-nowrap">{payment?.userDetails?.userName}</TableCell>
                        <TableCell className="text-nowrap">{payment?.userDetails?.phone}</TableCell>
                        <TableCell className="text-nowrap">{payment?.amount}</TableCell>
                        <TableCell className="text-nowrap">{payment?.paymentStatus}</TableCell>
                        <TableCell className="text-nowrap">
                          <Button>
                            Order Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    })
                  }
                </> : null
              }
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}

export default Payments