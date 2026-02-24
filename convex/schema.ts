import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    campaigns: defineTable({ name: v.string(), status: v.string(), active: v.boolean() }),
    signups: defineTable({ campaignId: v.id("campaigns"), email: v.string(), referralCode: v.string(), referredBy: v.optional(v.string()), source: v.string(), position: v.number(), joinedAt: v.string() }).index("by_campaign", ["campaignId"]).index("by_referral_code", ["referralCode"]),
    referrals: defineTable({ signupId: v.id("signups"), referredSignupId: v.id("signups"), timestamp: v.string() }).index("by_referrer", ["signupId"])
});
