const db = require('../../data/db-config')

const getAll = async () => {
 return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

const create = async (account) => {
  const [accountID] = await db('accounts').insert(account)
  return getById(accountID)
}

const updateById = async (id, account) => {
  await db('accounts')
  .where('id', id)
  .update(account)
  return getById(id)
}

const deleteById = async (id) => {
  const delRecord = await getById(id)
  await db('accounts')
    .where('id', id)
    .del()
  return(delRecord)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
