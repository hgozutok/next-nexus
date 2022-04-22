import { Company } from './Object/Company';
import { CompanyList } from './Query/Company';


import { extendType, booleanArg, nonNull, arg, queryType } from 'nexus'



import { makeSchema, objectType } from 'nexus'

import { Customer, CustomerWhereUniqueInput } from './Object/Customer';
import { findCustomerById, customerList } from './Query/Customer';




//query
export const testQuery = extendType({
    type: 'Query',
    definition(t) {
        t.boolean('test', {
            args: { bool: nonNull(booleanArg()) },
            resolve: (_, { bool }) => bool,
        })
    }
})





export const schema = makeSchema({
    types: [
        Company,
        CompanyList,
        Customer,
        CustomerWhereUniqueInput,
        customerList,
        findCustomerById,
        testQuery,

    ],
    //  plugins: [nexusPrisma()],
})

