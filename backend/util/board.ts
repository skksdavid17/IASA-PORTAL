import db from './db'
import { v4 as uuid } from 'uuid'
import { GID } from '../../scheme/group'

export async function createBoard(name: string, gid: GID) {
    const bid = uuid()
    await db.set(
        '_meta',
        {
            bid: bid,
            gid: gid,
            name: name,
        },
        'iasa_portal_board'
    )
    return gid
}
