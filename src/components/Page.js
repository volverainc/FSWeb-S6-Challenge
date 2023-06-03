import { Pagination, PaginationItem,PaginationLink } from "reactstrap"

const Page = ({handlePageChange, getPreviousPage}) => {
return <Pagination>
  <PaginationItem>
    <PaginationLink
      first
      href="#"
    />
  </PaginationItem>
  <PaginationItem onClick={getPreviousPage}>
    <PaginationLink 
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink onClick = {handlePageChange} href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink onClick = {handlePageChange} href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink onClick = {handlePageChange} href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink onClick = {handlePageChange} href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink onClick = {handlePageChange} href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>
}

export default Page