class AssignmentModel {
    static DefineDays () {
       return new Promise((res, rej) => {
            const date = new Date();
            let day = date.getDay();
            if(day == 0 || day == 6){
                res(true)
            }
            res(false)
       })
    }

    static DefineYears(year){
       return new Promise((res, rej) => {
            const leap = new Date(year, 1, 29).getDate() === 29;
            if (leap) {
              res(true)
            }
            res(false)
       })
    }
}

// console.log(AssignmentModel.DefineDays(0))
// console.log(AssignmentModel.DefineYears(2000))

module.exports = AssignmentModel;