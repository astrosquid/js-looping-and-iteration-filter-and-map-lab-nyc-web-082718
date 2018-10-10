function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map( driver => driver.name )
}

function exactMatch(drivers, dr_obj) {
  return drivers.filter( driver => {
    for (const key in dr_obj) { 
      return dr_obj[key] === driver[key]
    }
  })
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map( driver => driver.name )
}
