


import { arg, extendType, list, nonNull, nullable, queryField } from "nexus";
import { Customer, CustomerWhereUniqueInput } from "../Object/Customer";
import { prisma } from '../types/Context';


export const customerList = queryField('customerList', {
    type: nullable(list(Customer)),

    // args: {

    //     id: nonNull(arg({ type: 'CustomerWhereUniqueInput' }))
    // },

    resolve: async (root, args, ctx) => {
        let data = await prisma.customer.findMany().catch(err => {
            return err;
        });

        return data;

    }


});



export const findCustomerById = queryField("findCustomerById", {
    type: nullable(Customer),

    args: {
        data: CustomerWhereUniqueInput
    },

    // (CustomerWhereUniqueInput)


    resolve: async (root, args, ctx) => {

        let data = await prisma.company.findUnique({
            where: {
                id: Number(args.data?.id)
            }
        }).then(res => {
            return res;
        }).catch(err => {
            return err;
        });

        return data;
    }
});


