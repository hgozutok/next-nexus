import { list } from 'nexus';
import { queryField } from 'nexus';
import { nullable } from 'nexus';
import { Company } from './../Object/Company';
import { extendType } from 'nexus';
import { prisma } from '../types/Context';

export const CompanyList = queryField(
  'companyList', {
  type: nullable(list(Company)),
  resolve: async (root, args, ctx) => {
    return await prisma.company.findMany();
  }
}
)


//   type: 'Query',
//   definition(t) {
//     t.list.field('company', {
//       type: Company,
//       resolve(_root, _args, ctx) {
//         return prisma.company.findMany()
//       },
//     })

//   },
// });


// export const usersQueryField = queryField('user', {
//   type: SomeType,
//   args: {
//     id: nonNull(stringArg()),
//   },
//   resolve() {
//     // ...
//   },
// })