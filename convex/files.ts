import { ConvexError, v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const createFile = mutation({
  args: {
    name: v.string(),
  },
  async handler(ctx, args) {
    const indentity = await ctx.auth.getUserIdentity()

    if (!indentity) {
      throw new ConvexError('You have to be logged in to perform this action.')
    }

    await ctx.db.insert('files', {
      name: args.name,
    })
  },
})

export const getFiles = query({
  args: {},
  async handler(ctx) {
    const files = await ctx.db.query('files').collect()

    return files
  },
})
