import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAdminUsers } from '@/store/admin/admin-common-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
  const dispatch = useDispatch()
  const usersList = useSelector((state) => state?.adminCommonData?.usersList)

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);


  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader >
          <TableRow >
            <TableHead>User ID</TableHead>
            <TableHead>User name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-nowrap">Phone</TableHead>
            <TableHead className="text-nowrap">Tax ID</TableHead>
            <TableHead className="text-nowrap">Company name</TableHead>
            {/* <TableHead className="text-nowrap">Register date</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            usersList && usersList?.length > 0 ? <>
              {
                usersList?.map((user) => {
                  return <TableRow>
                    <TableCell>{user?._id}</TableCell>
                    <TableCell className="text-nowrap">{user?.userName}</TableCell>
                    <TableCell className="text-nowrap">{user?.email}</TableCell>
                    <TableCell className="text-nowrap">{user?.phone}</TableCell>
                    <TableCell className="text-nowrap">{user?.taxId}</TableCell>
                    <TableCell className="text-nowrap">{user?.companyName}</TableCell>
                  </TableRow>
                })
              }
            </> : null
          }
        </TableBody>
      </Table>
    </Card>
  )
}

export default Users