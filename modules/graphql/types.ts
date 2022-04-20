import { PrismaClient } from '@prisma/client';

import { extendType, booleanArg, nonNull, arg, queryType } from 'nexus'


import { NexusObjectTypeDef } from 'nexus/dist/definitions/objectType';

import { Customer } from 'nexus-prisma'
import { makeSchema, objectType } from 'nexus'




import * as types from './types'
const prisma = new PrismaClient();


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

const customer = objectType({
    name: Customer.$name,
    description: Customer.$description,
    definition(t) {
        t.field(Customer.id),
            t.field(Customer.name),
            t.field(Customer.email)
    }

});


export const customerQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('Customer', {
            type: customer,
            //  args: { id: nonNull(arg({ type: 'ID' })) },
            resolve: async (_, __, ctx) => {

                const customers: Customer[] = await prisma.customer.findMany();
                prisma.$disconnect();
                return customers;
            }

        })
    }
})

export const schema = makeSchema({
    types: [
        customer,
        customerQuery,
        testQuery,

    ],
    plugins: [nexusPrisma()],
})

