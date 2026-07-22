
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model HealthCheck
 * 
 */
export type HealthCheck = $Result.DefaultSelection<Prisma.$HealthCheckPayload>
/**
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model WorkerSkill
 * 
 */
export type WorkerSkill = $Result.DefaultSelection<Prisma.$WorkerSkillPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model WorkshopOrder
 * 
 */
export type WorkshopOrder = $Result.DefaultSelection<Prisma.$WorkshopOrderPayload>
/**
 * Model SatisfactionFeedback
 * 
 */
export type SatisfactionFeedback = $Result.DefaultSelection<Prisma.$SatisfactionFeedbackPayload>
/**
 * Model AttendanceEvent
 * 
 */
export type AttendanceEvent = $Result.DefaultSelection<Prisma.$AttendanceEventPayload>
/**
 * Model AttendanceDailySummary
 * 
 */
export type AttendanceDailySummary = $Result.DefaultSelection<Prisma.$AttendanceDailySummaryPayload>
/**
 * Model RewardLedger
 * 
 */
export type RewardLedger = $Result.DefaultSelection<Prisma.$RewardLedgerPayload>
/**
 * Model WorkTask
 * 
 */
export type WorkTask = $Result.DefaultSelection<Prisma.$WorkTaskPayload>
/**
 * Model IssueReport
 * 
 */
export type IssueReport = $Result.DefaultSelection<Prisma.$IssueReportPayload>
/**
 * Model Roller
 * 
 */
export type Roller = $Result.DefaultSelection<Prisma.$RollerPayload>
/**
 * Model SystemNotification
 * 
 */
export type SystemNotification = $Result.DefaultSelection<Prisma.$SystemNotificationPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model ReferralMessage
 * 
 */
export type ReferralMessage = $Result.DefaultSelection<Prisma.$ReferralMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  MANAGER: 'MANAGER',
  OFFICE: 'OFFICE',
  WORKER: 'WORKER',
  SUPPLY: 'SUPPLY',
  PURCHASE: 'PURCHASE',
  SHIPPING: 'SHIPPING'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AttendanceType: {
  CHECK_IN: 'CHECK_IN',
  TEMP_EXIT: 'TEMP_EXIT',
  RETURN_TO_WORK: 'RETURN_TO_WORK',
  CHECK_OUT: 'CHECK_OUT'
};

export type AttendanceType = (typeof AttendanceType)[keyof typeof AttendanceType]


export const TaskStatus: {
  PENDING: 'PENDING',
  READY: 'READY',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  ISSUE: 'ISSUE',
  BLOCKED: 'BLOCKED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const SettlementType: {
  CREDIT: 'CREDIT',
  CASH: 'CASH'
};

export type SettlementType = (typeof SettlementType)[keyof typeof SettlementType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AttendanceType = $Enums.AttendanceType

export const AttendanceType: typeof $Enums.AttendanceType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type SettlementType = $Enums.SettlementType

export const SettlementType: typeof $Enums.SettlementType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more HealthChecks
 * const healthChecks = await prisma.healthCheck.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more HealthChecks
   * const healthChecks = await prisma.healthCheck.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.healthCheck`: Exposes CRUD operations for the **HealthCheck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthChecks
    * const healthChecks = await prisma.healthCheck.findMany()
    * ```
    */
  get healthCheck(): Prisma.HealthCheckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workerSkill`: Exposes CRUD operations for the **WorkerSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkerSkills
    * const workerSkills = await prisma.workerSkill.findMany()
    * ```
    */
  get workerSkill(): Prisma.WorkerSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workshopOrder`: Exposes CRUD operations for the **WorkshopOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkshopOrders
    * const workshopOrders = await prisma.workshopOrder.findMany()
    * ```
    */
  get workshopOrder(): Prisma.WorkshopOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.satisfactionFeedback`: Exposes CRUD operations for the **SatisfactionFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SatisfactionFeedbacks
    * const satisfactionFeedbacks = await prisma.satisfactionFeedback.findMany()
    * ```
    */
  get satisfactionFeedback(): Prisma.SatisfactionFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceEvent`: Exposes CRUD operations for the **AttendanceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceEvents
    * const attendanceEvents = await prisma.attendanceEvent.findMany()
    * ```
    */
  get attendanceEvent(): Prisma.AttendanceEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceDailySummary`: Exposes CRUD operations for the **AttendanceDailySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceDailySummaries
    * const attendanceDailySummaries = await prisma.attendanceDailySummary.findMany()
    * ```
    */
  get attendanceDailySummary(): Prisma.AttendanceDailySummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardLedger`: Exposes CRUD operations for the **RewardLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardLedgers
    * const rewardLedgers = await prisma.rewardLedger.findMany()
    * ```
    */
  get rewardLedger(): Prisma.RewardLedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workTask`: Exposes CRUD operations for the **WorkTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkTasks
    * const workTasks = await prisma.workTask.findMany()
    * ```
    */
  get workTask(): Prisma.WorkTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issueReport`: Exposes CRUD operations for the **IssueReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssueReports
    * const issueReports = await prisma.issueReport.findMany()
    * ```
    */
  get issueReport(): Prisma.IssueReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roller`: Exposes CRUD operations for the **Roller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rollers
    * const rollers = await prisma.roller.findMany()
    * ```
    */
  get roller(): Prisma.RollerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemNotification`: Exposes CRUD operations for the **SystemNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemNotifications
    * const systemNotifications = await prisma.systemNotification.findMany()
    * ```
    */
  get systemNotification(): Prisma.SystemNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralMessage`: Exposes CRUD operations for the **ReferralMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralMessages
    * const referralMessages = await prisma.referralMessage.findMany()
    * ```
    */
  get referralMessage(): Prisma.ReferralMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    HealthCheck: 'HealthCheck',
    AppUser: 'AppUser',
    WorkerSkill: 'WorkerSkill',
    Customer: 'Customer',
    WorkshopOrder: 'WorkshopOrder',
    SatisfactionFeedback: 'SatisfactionFeedback',
    AttendanceEvent: 'AttendanceEvent',
    AttendanceDailySummary: 'AttendanceDailySummary',
    RewardLedger: 'RewardLedger',
    WorkTask: 'WorkTask',
    IssueReport: 'IssueReport',
    Roller: 'Roller',
    SystemNotification: 'SystemNotification',
    Referral: 'Referral',
    ReferralMessage: 'ReferralMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "healthCheck" | "appUser" | "workerSkill" | "customer" | "workshopOrder" | "satisfactionFeedback" | "attendanceEvent" | "attendanceDailySummary" | "rewardLedger" | "workTask" | "issueReport" | "roller" | "systemNotification" | "referral" | "referralMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      HealthCheck: {
        payload: Prisma.$HealthCheckPayload<ExtArgs>
        fields: Prisma.HealthCheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthCheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthCheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>
          }
          findFirst: {
            args: Prisma.HealthCheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthCheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>
          }
          findMany: {
            args: Prisma.HealthCheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>[]
          }
          create: {
            args: Prisma.HealthCheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>
          }
          createMany: {
            args: Prisma.HealthCheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HealthCheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>
          }
          update: {
            args: Prisma.HealthCheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>
          }
          deleteMany: {
            args: Prisma.HealthCheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthCheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HealthCheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthCheckPayload>
          }
          aggregate: {
            args: Prisma.HealthCheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthCheck>
          }
          groupBy: {
            args: Prisma.HealthCheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthCheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthCheckCountArgs<ExtArgs>
            result: $Utils.Optional<HealthCheckCountAggregateOutputType> | number
          }
        }
      }
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      WorkerSkill: {
        payload: Prisma.$WorkerSkillPayload<ExtArgs>
        fields: Prisma.WorkerSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>
          }
          findFirst: {
            args: Prisma.WorkerSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>
          }
          findMany: {
            args: Prisma.WorkerSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>[]
          }
          create: {
            args: Prisma.WorkerSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>
          }
          createMany: {
            args: Prisma.WorkerSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkerSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>
          }
          update: {
            args: Prisma.WorkerSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>
          }
          deleteMany: {
            args: Prisma.WorkerSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkerSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerSkillPayload>
          }
          aggregate: {
            args: Prisma.WorkerSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkerSkill>
          }
          groupBy: {
            args: Prisma.WorkerSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerSkillCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerSkillCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      WorkshopOrder: {
        payload: Prisma.$WorkshopOrderPayload<ExtArgs>
        fields: Prisma.WorkshopOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkshopOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkshopOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>
          }
          findFirst: {
            args: Prisma.WorkshopOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkshopOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>
          }
          findMany: {
            args: Prisma.WorkshopOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>[]
          }
          create: {
            args: Prisma.WorkshopOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>
          }
          createMany: {
            args: Prisma.WorkshopOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkshopOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>
          }
          update: {
            args: Prisma.WorkshopOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>
          }
          deleteMany: {
            args: Prisma.WorkshopOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkshopOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkshopOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopOrderPayload>
          }
          aggregate: {
            args: Prisma.WorkshopOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkshopOrder>
          }
          groupBy: {
            args: Prisma.WorkshopOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkshopOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkshopOrderCountArgs<ExtArgs>
            result: $Utils.Optional<WorkshopOrderCountAggregateOutputType> | number
          }
        }
      }
      SatisfactionFeedback: {
        payload: Prisma.$SatisfactionFeedbackPayload<ExtArgs>
        fields: Prisma.SatisfactionFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatisfactionFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatisfactionFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>
          }
          findFirst: {
            args: Prisma.SatisfactionFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatisfactionFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>
          }
          findMany: {
            args: Prisma.SatisfactionFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>[]
          }
          create: {
            args: Prisma.SatisfactionFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>
          }
          createMany: {
            args: Prisma.SatisfactionFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SatisfactionFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>
          }
          update: {
            args: Prisma.SatisfactionFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.SatisfactionFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SatisfactionFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SatisfactionFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfactionFeedbackPayload>
          }
          aggregate: {
            args: Prisma.SatisfactionFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatisfactionFeedback>
          }
          groupBy: {
            args: Prisma.SatisfactionFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatisfactionFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatisfactionFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<SatisfactionFeedbackCountAggregateOutputType> | number
          }
        }
      }
      AttendanceEvent: {
        payload: Prisma.$AttendanceEventPayload<ExtArgs>
        fields: Prisma.AttendanceEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          findFirst: {
            args: Prisma.AttendanceEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          findMany: {
            args: Prisma.AttendanceEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>[]
          }
          create: {
            args: Prisma.AttendanceEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          createMany: {
            args: Prisma.AttendanceEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          update: {
            args: Prisma.AttendanceEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          aggregate: {
            args: Prisma.AttendanceEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceEvent>
          }
          groupBy: {
            args: Prisma.AttendanceEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceEventCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceEventCountAggregateOutputType> | number
          }
        }
      }
      AttendanceDailySummary: {
        payload: Prisma.$AttendanceDailySummaryPayload<ExtArgs>
        fields: Prisma.AttendanceDailySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceDailySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceDailySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>
          }
          findFirst: {
            args: Prisma.AttendanceDailySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceDailySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>
          }
          findMany: {
            args: Prisma.AttendanceDailySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>[]
          }
          create: {
            args: Prisma.AttendanceDailySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>
          }
          createMany: {
            args: Prisma.AttendanceDailySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDailySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>
          }
          update: {
            args: Prisma.AttendanceDailySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDailySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceDailySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceDailySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDailySummaryPayload>
          }
          aggregate: {
            args: Prisma.AttendanceDailySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceDailySummary>
          }
          groupBy: {
            args: Prisma.AttendanceDailySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceDailySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceDailySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceDailySummaryCountAggregateOutputType> | number
          }
        }
      }
      RewardLedger: {
        payload: Prisma.$RewardLedgerPayload<ExtArgs>
        fields: Prisma.RewardLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          findFirst: {
            args: Prisma.RewardLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          findMany: {
            args: Prisma.RewardLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>[]
          }
          create: {
            args: Prisma.RewardLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          createMany: {
            args: Prisma.RewardLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RewardLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          update: {
            args: Prisma.RewardLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          deleteMany: {
            args: Prisma.RewardLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RewardLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          aggregate: {
            args: Prisma.RewardLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardLedger>
          }
          groupBy: {
            args: Prisma.RewardLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<RewardLedgerCountAggregateOutputType> | number
          }
        }
      }
      WorkTask: {
        payload: Prisma.$WorkTaskPayload<ExtArgs>
        fields: Prisma.WorkTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>
          }
          findFirst: {
            args: Prisma.WorkTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>
          }
          findMany: {
            args: Prisma.WorkTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>[]
          }
          create: {
            args: Prisma.WorkTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>
          }
          createMany: {
            args: Prisma.WorkTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>
          }
          update: {
            args: Prisma.WorkTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>
          }
          deleteMany: {
            args: Prisma.WorkTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTaskPayload>
          }
          aggregate: {
            args: Prisma.WorkTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkTask>
          }
          groupBy: {
            args: Prisma.WorkTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkTaskCountArgs<ExtArgs>
            result: $Utils.Optional<WorkTaskCountAggregateOutputType> | number
          }
        }
      }
      IssueReport: {
        payload: Prisma.$IssueReportPayload<ExtArgs>
        fields: Prisma.IssueReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          findFirst: {
            args: Prisma.IssueReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          findMany: {
            args: Prisma.IssueReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>[]
          }
          create: {
            args: Prisma.IssueReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          createMany: {
            args: Prisma.IssueReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IssueReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          update: {
            args: Prisma.IssueReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          deleteMany: {
            args: Prisma.IssueReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IssueReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          aggregate: {
            args: Prisma.IssueReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssueReport>
          }
          groupBy: {
            args: Prisma.IssueReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueReportCountArgs<ExtArgs>
            result: $Utils.Optional<IssueReportCountAggregateOutputType> | number
          }
        }
      }
      Roller: {
        payload: Prisma.$RollerPayload<ExtArgs>
        fields: Prisma.RollerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RollerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RollerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>
          }
          findFirst: {
            args: Prisma.RollerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RollerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>
          }
          findMany: {
            args: Prisma.RollerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>[]
          }
          create: {
            args: Prisma.RollerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>
          }
          createMany: {
            args: Prisma.RollerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RollerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>
          }
          update: {
            args: Prisma.RollerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>
          }
          deleteMany: {
            args: Prisma.RollerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RollerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RollerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollerPayload>
          }
          aggregate: {
            args: Prisma.RollerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoller>
          }
          groupBy: {
            args: Prisma.RollerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RollerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RollerCountArgs<ExtArgs>
            result: $Utils.Optional<RollerCountAggregateOutputType> | number
          }
        }
      }
      SystemNotification: {
        payload: Prisma.$SystemNotificationPayload<ExtArgs>
        fields: Prisma.SystemNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>
          }
          findFirst: {
            args: Prisma.SystemNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>
          }
          findMany: {
            args: Prisma.SystemNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>[]
          }
          create: {
            args: Prisma.SystemNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>
          }
          createMany: {
            args: Prisma.SystemNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>
          }
          update: {
            args: Prisma.SystemNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>
          }
          deleteMany: {
            args: Prisma.SystemNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNotificationPayload>
          }
          aggregate: {
            args: Prisma.SystemNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemNotification>
          }
          groupBy: {
            args: Prisma.SystemNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<SystemNotificationCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      ReferralMessage: {
        payload: Prisma.$ReferralMessagePayload<ExtArgs>
        fields: Prisma.ReferralMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>
          }
          findFirst: {
            args: Prisma.ReferralMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>
          }
          findMany: {
            args: Prisma.ReferralMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>[]
          }
          create: {
            args: Prisma.ReferralMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>
          }
          createMany: {
            args: Prisma.ReferralMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReferralMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>
          }
          update: {
            args: Prisma.ReferralMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>
          }
          deleteMany: {
            args: Prisma.ReferralMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralMessagePayload>
          }
          aggregate: {
            args: Prisma.ReferralMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralMessage>
          }
          groupBy: {
            args: Prisma.ReferralMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    healthCheck?: HealthCheckOmit
    appUser?: AppUserOmit
    workerSkill?: WorkerSkillOmit
    customer?: CustomerOmit
    workshopOrder?: WorkshopOrderOmit
    satisfactionFeedback?: SatisfactionFeedbackOmit
    attendanceEvent?: AttendanceEventOmit
    attendanceDailySummary?: AttendanceDailySummaryOmit
    rewardLedger?: RewardLedgerOmit
    workTask?: WorkTaskOmit
    issueReport?: IssueReportOmit
    roller?: RollerOmit
    systemNotification?: SystemNotificationOmit
    referral?: ReferralOmit
    referralMessage?: ReferralMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AppUserCountOutputType
   */

  export type AppUserCountOutputType = {
    skills: number
    pickedTasks: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | AppUserCountOutputTypeCountSkillsArgs
    pickedTasks?: boolean | AppUserCountOutputTypeCountPickedTasksArgs
  }

  // Custom InputTypes
  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserCountOutputType
     */
    select?: AppUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerSkillWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountPickedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTaskWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopOrderWhereInput
  }


  /**
   * Count Type WorkshopOrderCountOutputType
   */

  export type WorkshopOrderCountOutputType = {
    rollers: number
    satisfactionFeedbacks: number
  }

  export type WorkshopOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rollers?: boolean | WorkshopOrderCountOutputTypeCountRollersArgs
    satisfactionFeedbacks?: boolean | WorkshopOrderCountOutputTypeCountSatisfactionFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * WorkshopOrderCountOutputType without action
   */
  export type WorkshopOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrderCountOutputType
     */
    select?: WorkshopOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkshopOrderCountOutputType without action
   */
  export type WorkshopOrderCountOutputTypeCountRollersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollerWhereInput
  }

  /**
   * WorkshopOrderCountOutputType without action
   */
  export type WorkshopOrderCountOutputTypeCountSatisfactionFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatisfactionFeedbackWhereInput
  }


  /**
   * Count Type RollerCountOutputType
   */

  export type RollerCountOutputType = {
    workTasks: number
  }

  export type RollerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workTasks?: boolean | RollerCountOutputTypeCountWorkTasksArgs
  }

  // Custom InputTypes
  /**
   * RollerCountOutputType without action
   */
  export type RollerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollerCountOutputType
     */
    select?: RollerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RollerCountOutputType without action
   */
  export type RollerCountOutputTypeCountWorkTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTaskWhereInput
  }


  /**
   * Count Type ReferralCountOutputType
   */

  export type ReferralCountOutputType = {
    messages: number
  }

  export type ReferralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ReferralCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCountOutputType
     */
    select?: ReferralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model HealthCheck
   */

  export type AggregateHealthCheck = {
    _count: HealthCheckCountAggregateOutputType | null
    _avg: HealthCheckAvgAggregateOutputType | null
    _sum: HealthCheckSumAggregateOutputType | null
    _min: HealthCheckMinAggregateOutputType | null
    _max: HealthCheckMaxAggregateOutputType | null
  }

  export type HealthCheckAvgAggregateOutputType = {
    id: number | null
  }

  export type HealthCheckSumAggregateOutputType = {
    id: number | null
  }

  export type HealthCheckMinAggregateOutputType = {
    id: number | null
    label: string | null
    createdAt: Date | null
  }

  export type HealthCheckMaxAggregateOutputType = {
    id: number | null
    label: string | null
    createdAt: Date | null
  }

  export type HealthCheckCountAggregateOutputType = {
    id: number
    label: number
    createdAt: number
    _all: number
  }


  export type HealthCheckAvgAggregateInputType = {
    id?: true
  }

  export type HealthCheckSumAggregateInputType = {
    id?: true
  }

  export type HealthCheckMinAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
  }

  export type HealthCheckMaxAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
  }

  export type HealthCheckCountAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type HealthCheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthCheck to aggregate.
     */
    where?: HealthCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthChecks to fetch.
     */
    orderBy?: HealthCheckOrderByWithRelationInput | HealthCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthChecks
    **/
    _count?: true | HealthCheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthCheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthCheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthCheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthCheckMaxAggregateInputType
  }

  export type GetHealthCheckAggregateType<T extends HealthCheckAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthCheck[P]>
      : GetScalarType<T[P], AggregateHealthCheck[P]>
  }




  export type HealthCheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthCheckWhereInput
    orderBy?: HealthCheckOrderByWithAggregationInput | HealthCheckOrderByWithAggregationInput[]
    by: HealthCheckScalarFieldEnum[] | HealthCheckScalarFieldEnum
    having?: HealthCheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthCheckCountAggregateInputType | true
    _avg?: HealthCheckAvgAggregateInputType
    _sum?: HealthCheckSumAggregateInputType
    _min?: HealthCheckMinAggregateInputType
    _max?: HealthCheckMaxAggregateInputType
  }

  export type HealthCheckGroupByOutputType = {
    id: number
    label: string
    createdAt: Date
    _count: HealthCheckCountAggregateOutputType | null
    _avg: HealthCheckAvgAggregateOutputType | null
    _sum: HealthCheckSumAggregateOutputType | null
    _min: HealthCheckMinAggregateOutputType | null
    _max: HealthCheckMaxAggregateOutputType | null
  }

  type GetHealthCheckGroupByPayload<T extends HealthCheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthCheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthCheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthCheckGroupByOutputType[P]>
            : GetScalarType<T[P], HealthCheckGroupByOutputType[P]>
        }
      >
    >


  export type HealthCheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["healthCheck"]>



  export type HealthCheckSelectScalar = {
    id?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type HealthCheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "createdAt", ExtArgs["result"]["healthCheck"]>

  export type $HealthCheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthCheck"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      createdAt: Date
    }, ExtArgs["result"]["healthCheck"]>
    composites: {}
  }

  type HealthCheckGetPayload<S extends boolean | null | undefined | HealthCheckDefaultArgs> = $Result.GetResult<Prisma.$HealthCheckPayload, S>

  type HealthCheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthCheckCountAggregateInputType | true
    }

  export interface HealthCheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthCheck'], meta: { name: 'HealthCheck' } }
    /**
     * Find zero or one HealthCheck that matches the filter.
     * @param {HealthCheckFindUniqueArgs} args - Arguments to find a HealthCheck
     * @example
     * // Get one HealthCheck
     * const healthCheck = await prisma.healthCheck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthCheckFindUniqueArgs>(args: SelectSubset<T, HealthCheckFindUniqueArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthCheck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthCheckFindUniqueOrThrowArgs} args - Arguments to find a HealthCheck
     * @example
     * // Get one HealthCheck
     * const healthCheck = await prisma.healthCheck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthCheckFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthCheck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckFindFirstArgs} args - Arguments to find a HealthCheck
     * @example
     * // Get one HealthCheck
     * const healthCheck = await prisma.healthCheck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthCheckFindFirstArgs>(args?: SelectSubset<T, HealthCheckFindFirstArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthCheck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckFindFirstOrThrowArgs} args - Arguments to find a HealthCheck
     * @example
     * // Get one HealthCheck
     * const healthCheck = await prisma.healthCheck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthCheckFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthChecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthChecks
     * const healthChecks = await prisma.healthCheck.findMany()
     * 
     * // Get first 10 HealthChecks
     * const healthChecks = await prisma.healthCheck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthCheckWithIdOnly = await prisma.healthCheck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthCheckFindManyArgs>(args?: SelectSubset<T, HealthCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthCheck.
     * @param {HealthCheckCreateArgs} args - Arguments to create a HealthCheck.
     * @example
     * // Create one HealthCheck
     * const HealthCheck = await prisma.healthCheck.create({
     *   data: {
     *     // ... data to create a HealthCheck
     *   }
     * })
     * 
     */
    create<T extends HealthCheckCreateArgs>(args: SelectSubset<T, HealthCheckCreateArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthChecks.
     * @param {HealthCheckCreateManyArgs} args - Arguments to create many HealthChecks.
     * @example
     * // Create many HealthChecks
     * const healthCheck = await prisma.healthCheck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthCheckCreateManyArgs>(args?: SelectSubset<T, HealthCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HealthCheck.
     * @param {HealthCheckDeleteArgs} args - Arguments to delete one HealthCheck.
     * @example
     * // Delete one HealthCheck
     * const HealthCheck = await prisma.healthCheck.delete({
     *   where: {
     *     // ... filter to delete one HealthCheck
     *   }
     * })
     * 
     */
    delete<T extends HealthCheckDeleteArgs>(args: SelectSubset<T, HealthCheckDeleteArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthCheck.
     * @param {HealthCheckUpdateArgs} args - Arguments to update one HealthCheck.
     * @example
     * // Update one HealthCheck
     * const healthCheck = await prisma.healthCheck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthCheckUpdateArgs>(args: SelectSubset<T, HealthCheckUpdateArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthChecks.
     * @param {HealthCheckDeleteManyArgs} args - Arguments to filter HealthChecks to delete.
     * @example
     * // Delete a few HealthChecks
     * const { count } = await prisma.healthCheck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthCheckDeleteManyArgs>(args?: SelectSubset<T, HealthCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthChecks
     * const healthCheck = await prisma.healthCheck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthCheckUpdateManyArgs>(args: SelectSubset<T, HealthCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HealthCheck.
     * @param {HealthCheckUpsertArgs} args - Arguments to update or create a HealthCheck.
     * @example
     * // Update or create a HealthCheck
     * const healthCheck = await prisma.healthCheck.upsert({
     *   create: {
     *     // ... data to create a HealthCheck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthCheck we want to update
     *   }
     * })
     */
    upsert<T extends HealthCheckUpsertArgs>(args: SelectSubset<T, HealthCheckUpsertArgs<ExtArgs>>): Prisma__HealthCheckClient<$Result.GetResult<Prisma.$HealthCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckCountArgs} args - Arguments to filter HealthChecks to count.
     * @example
     * // Count the number of HealthChecks
     * const count = await prisma.healthCheck.count({
     *   where: {
     *     // ... the filter for the HealthChecks we want to count
     *   }
     * })
    **/
    count<T extends HealthCheckCountArgs>(
      args?: Subset<T, HealthCheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthCheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HealthCheckAggregateArgs>(args: Subset<T, HealthCheckAggregateArgs>): Prisma.PrismaPromise<GetHealthCheckAggregateType<T>>

    /**
     * Group by HealthCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HealthCheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthCheckGroupByArgs['orderBy'] }
        : { orderBy?: HealthCheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HealthCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthCheck model
   */
  readonly fields: HealthCheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthCheck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthCheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HealthCheck model
   */
  interface HealthCheckFieldRefs {
    readonly id: FieldRef<"HealthCheck", 'Int'>
    readonly label: FieldRef<"HealthCheck", 'String'>
    readonly createdAt: FieldRef<"HealthCheck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthCheck findUnique
   */
  export type HealthCheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * Filter, which HealthCheck to fetch.
     */
    where: HealthCheckWhereUniqueInput
  }

  /**
   * HealthCheck findUniqueOrThrow
   */
  export type HealthCheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * Filter, which HealthCheck to fetch.
     */
    where: HealthCheckWhereUniqueInput
  }

  /**
   * HealthCheck findFirst
   */
  export type HealthCheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * Filter, which HealthCheck to fetch.
     */
    where?: HealthCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthChecks to fetch.
     */
    orderBy?: HealthCheckOrderByWithRelationInput | HealthCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthChecks.
     */
    cursor?: HealthCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthChecks.
     */
    distinct?: HealthCheckScalarFieldEnum | HealthCheckScalarFieldEnum[]
  }

  /**
   * HealthCheck findFirstOrThrow
   */
  export type HealthCheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * Filter, which HealthCheck to fetch.
     */
    where?: HealthCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthChecks to fetch.
     */
    orderBy?: HealthCheckOrderByWithRelationInput | HealthCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthChecks.
     */
    cursor?: HealthCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthChecks.
     */
    distinct?: HealthCheckScalarFieldEnum | HealthCheckScalarFieldEnum[]
  }

  /**
   * HealthCheck findMany
   */
  export type HealthCheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * Filter, which HealthChecks to fetch.
     */
    where?: HealthCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthChecks to fetch.
     */
    orderBy?: HealthCheckOrderByWithRelationInput | HealthCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthChecks.
     */
    cursor?: HealthCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthChecks.
     */
    skip?: number
    distinct?: HealthCheckScalarFieldEnum | HealthCheckScalarFieldEnum[]
  }

  /**
   * HealthCheck create
   */
  export type HealthCheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * The data needed to create a HealthCheck.
     */
    data: XOR<HealthCheckCreateInput, HealthCheckUncheckedCreateInput>
  }

  /**
   * HealthCheck createMany
   */
  export type HealthCheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthChecks.
     */
    data: HealthCheckCreateManyInput | HealthCheckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthCheck update
   */
  export type HealthCheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * The data needed to update a HealthCheck.
     */
    data: XOR<HealthCheckUpdateInput, HealthCheckUncheckedUpdateInput>
    /**
     * Choose, which HealthCheck to update.
     */
    where: HealthCheckWhereUniqueInput
  }

  /**
   * HealthCheck updateMany
   */
  export type HealthCheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthChecks.
     */
    data: XOR<HealthCheckUpdateManyMutationInput, HealthCheckUncheckedUpdateManyInput>
    /**
     * Filter which HealthChecks to update
     */
    where?: HealthCheckWhereInput
    /**
     * Limit how many HealthChecks to update.
     */
    limit?: number
  }

  /**
   * HealthCheck upsert
   */
  export type HealthCheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * The filter to search for the HealthCheck to update in case it exists.
     */
    where: HealthCheckWhereUniqueInput
    /**
     * In case the HealthCheck found by the `where` argument doesn't exist, create a new HealthCheck with this data.
     */
    create: XOR<HealthCheckCreateInput, HealthCheckUncheckedCreateInput>
    /**
     * In case the HealthCheck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthCheckUpdateInput, HealthCheckUncheckedUpdateInput>
  }

  /**
   * HealthCheck delete
   */
  export type HealthCheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
    /**
     * Filter which HealthCheck to delete.
     */
    where: HealthCheckWhereUniqueInput
  }

  /**
   * HealthCheck deleteMany
   */
  export type HealthCheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthChecks to delete
     */
    where?: HealthCheckWhereInput
    /**
     * Limit how many HealthChecks to delete.
     */
    limit?: number
  }

  /**
   * HealthCheck without action
   */
  export type HealthCheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCheck
     */
    select?: HealthCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthCheck
     */
    omit?: HealthCheckOmit<ExtArgs> | null
  }


  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AppUserSumAggregateOutputType = {
    id: number | null
  }

  export type AppUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    fullName: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    active: boolean | null
    phone: string | null
    baleUserId: string | null
    profileImageUrl: string | null
    notes: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    fullName: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    active: boolean | null
    phone: string | null
    baleUserId: string | null
    profileImageUrl: string | null
    notes: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    fullName: number
    firstName: number
    lastName: number
    role: number
    active: number
    phone: number
    baleUserId: number
    profileImageUrl: number
    notes: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppUserAvgAggregateInputType = {
    id?: true
  }

  export type AppUserSumAggregateInputType = {
    id?: true
  }

  export type AppUserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    fullName?: true
    firstName?: true
    lastName?: true
    role?: true
    active?: true
    phone?: true
    baleUserId?: true
    profileImageUrl?: true
    notes?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    fullName?: true
    firstName?: true
    lastName?: true
    role?: true
    active?: true
    phone?: true
    baleUserId?: true
    profileImageUrl?: true
    notes?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    fullName?: true
    firstName?: true
    lastName?: true
    role?: true
    active?: true
    phone?: true
    baleUserId?: true
    profileImageUrl?: true
    notes?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _avg?: AppUserAvgAggregateInputType
    _sum?: AppUserSumAggregateInputType
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: number
    username: string
    passwordHash: string
    fullName: string
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole
    active: boolean
    phone: string | null
    baleUserId: string | null
    profileImageUrl: string | null
    notes: string | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    active?: boolean
    phone?: boolean
    baleUserId?: boolean
    profileImageUrl?: boolean
    notes?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | AppUser$skillsArgs<ExtArgs>
    pickedTasks?: boolean | AppUser$pickedTasksArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>



  export type AppUserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    active?: boolean
    phone?: boolean
    baleUserId?: boolean
    profileImageUrl?: boolean
    notes?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "fullName" | "firstName" | "lastName" | "role" | "active" | "phone" | "baleUserId" | "profileImageUrl" | "notes" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["appUser"]>
  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | AppUser$skillsArgs<ExtArgs>
    pickedTasks?: boolean | AppUser$pickedTasksArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      skills: Prisma.$WorkerSkillPayload<ExtArgs>[]
      pickedTasks: Prisma.$WorkTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      fullName: string
      firstName: string | null
      lastName: string | null
      role: $Enums.UserRole
      active: boolean
      phone: string | null
      baleUserId: string | null
      profileImageUrl: string | null
      notes: string | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends AppUser$skillsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pickedTasks<T extends AppUser$pickedTasksArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$pickedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppUser model
   */
  interface AppUserFieldRefs {
    readonly id: FieldRef<"AppUser", 'Int'>
    readonly username: FieldRef<"AppUser", 'String'>
    readonly passwordHash: FieldRef<"AppUser", 'String'>
    readonly fullName: FieldRef<"AppUser", 'String'>
    readonly firstName: FieldRef<"AppUser", 'String'>
    readonly lastName: FieldRef<"AppUser", 'String'>
    readonly role: FieldRef<"AppUser", 'UserRole'>
    readonly active: FieldRef<"AppUser", 'Boolean'>
    readonly phone: FieldRef<"AppUser", 'String'>
    readonly baleUserId: FieldRef<"AppUser", 'String'>
    readonly profileImageUrl: FieldRef<"AppUser", 'String'>
    readonly notes: FieldRef<"AppUser", 'String'>
    readonly lastLoginAt: FieldRef<"AppUser", 'DateTime'>
    readonly createdAt: FieldRef<"AppUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AppUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to update.
     */
    limit?: number
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to delete.
     */
    limit?: number
  }

  /**
   * AppUser.skills
   */
  export type AppUser$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    where?: WorkerSkillWhereInput
    orderBy?: WorkerSkillOrderByWithRelationInput | WorkerSkillOrderByWithRelationInput[]
    cursor?: WorkerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkerSkillScalarFieldEnum | WorkerSkillScalarFieldEnum[]
  }

  /**
   * AppUser.pickedTasks
   */
  export type AppUser$pickedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    where?: WorkTaskWhereInput
    orderBy?: WorkTaskOrderByWithRelationInput | WorkTaskOrderByWithRelationInput[]
    cursor?: WorkTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkTaskScalarFieldEnum | WorkTaskScalarFieldEnum[]
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
  }


  /**
   * Model WorkerSkill
   */

  export type AggregateWorkerSkill = {
    _count: WorkerSkillCountAggregateOutputType | null
    _avg: WorkerSkillAvgAggregateOutputType | null
    _sum: WorkerSkillSumAggregateOutputType | null
    _min: WorkerSkillMinAggregateOutputType | null
    _max: WorkerSkillMaxAggregateOutputType | null
  }

  export type WorkerSkillAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WorkerSkillSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WorkerSkillMinAggregateOutputType = {
    id: number | null
    userId: number | null
    stage: string | null
    createdAt: Date | null
  }

  export type WorkerSkillMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    stage: string | null
    createdAt: Date | null
  }

  export type WorkerSkillCountAggregateOutputType = {
    id: number
    userId: number
    stage: number
    createdAt: number
    _all: number
  }


  export type WorkerSkillAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WorkerSkillSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WorkerSkillMinAggregateInputType = {
    id?: true
    userId?: true
    stage?: true
    createdAt?: true
  }

  export type WorkerSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    stage?: true
    createdAt?: true
  }

  export type WorkerSkillCountAggregateInputType = {
    id?: true
    userId?: true
    stage?: true
    createdAt?: true
    _all?: true
  }

  export type WorkerSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerSkill to aggregate.
     */
    where?: WorkerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerSkills to fetch.
     */
    orderBy?: WorkerSkillOrderByWithRelationInput | WorkerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkerSkills
    **/
    _count?: true | WorkerSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerSkillMaxAggregateInputType
  }

  export type GetWorkerSkillAggregateType<T extends WorkerSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkerSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkerSkill[P]>
      : GetScalarType<T[P], AggregateWorkerSkill[P]>
  }




  export type WorkerSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerSkillWhereInput
    orderBy?: WorkerSkillOrderByWithAggregationInput | WorkerSkillOrderByWithAggregationInput[]
    by: WorkerSkillScalarFieldEnum[] | WorkerSkillScalarFieldEnum
    having?: WorkerSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerSkillCountAggregateInputType | true
    _avg?: WorkerSkillAvgAggregateInputType
    _sum?: WorkerSkillSumAggregateInputType
    _min?: WorkerSkillMinAggregateInputType
    _max?: WorkerSkillMaxAggregateInputType
  }

  export type WorkerSkillGroupByOutputType = {
    id: number
    userId: number
    stage: string
    createdAt: Date
    _count: WorkerSkillCountAggregateOutputType | null
    _avg: WorkerSkillAvgAggregateOutputType | null
    _sum: WorkerSkillSumAggregateOutputType | null
    _min: WorkerSkillMinAggregateOutputType | null
    _max: WorkerSkillMaxAggregateOutputType | null
  }

  type GetWorkerSkillGroupByPayload<T extends WorkerSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerSkillGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerSkillGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stage?: boolean
    createdAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerSkill"]>



  export type WorkerSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    stage?: boolean
    createdAt?: boolean
  }

  export type WorkerSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stage" | "createdAt", ExtArgs["result"]["workerSkill"]>
  export type WorkerSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $WorkerSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkerSkill"
    objects: {
      user: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      stage: string
      createdAt: Date
    }, ExtArgs["result"]["workerSkill"]>
    composites: {}
  }

  type WorkerSkillGetPayload<S extends boolean | null | undefined | WorkerSkillDefaultArgs> = $Result.GetResult<Prisma.$WorkerSkillPayload, S>

  type WorkerSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerSkillCountAggregateInputType | true
    }

  export interface WorkerSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkerSkill'], meta: { name: 'WorkerSkill' } }
    /**
     * Find zero or one WorkerSkill that matches the filter.
     * @param {WorkerSkillFindUniqueArgs} args - Arguments to find a WorkerSkill
     * @example
     * // Get one WorkerSkill
     * const workerSkill = await prisma.workerSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerSkillFindUniqueArgs>(args: SelectSubset<T, WorkerSkillFindUniqueArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkerSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerSkillFindUniqueOrThrowArgs} args - Arguments to find a WorkerSkill
     * @example
     * // Get one WorkerSkill
     * const workerSkill = await prisma.workerSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillFindFirstArgs} args - Arguments to find a WorkerSkill
     * @example
     * // Get one WorkerSkill
     * const workerSkill = await prisma.workerSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerSkillFindFirstArgs>(args?: SelectSubset<T, WorkerSkillFindFirstArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillFindFirstOrThrowArgs} args - Arguments to find a WorkerSkill
     * @example
     * // Get one WorkerSkill
     * const workerSkill = await prisma.workerSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkerSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkerSkills
     * const workerSkills = await prisma.workerSkill.findMany()
     * 
     * // Get first 10 WorkerSkills
     * const workerSkills = await prisma.workerSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerSkillWithIdOnly = await prisma.workerSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerSkillFindManyArgs>(args?: SelectSubset<T, WorkerSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkerSkill.
     * @param {WorkerSkillCreateArgs} args - Arguments to create a WorkerSkill.
     * @example
     * // Create one WorkerSkill
     * const WorkerSkill = await prisma.workerSkill.create({
     *   data: {
     *     // ... data to create a WorkerSkill
     *   }
     * })
     * 
     */
    create<T extends WorkerSkillCreateArgs>(args: SelectSubset<T, WorkerSkillCreateArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkerSkills.
     * @param {WorkerSkillCreateManyArgs} args - Arguments to create many WorkerSkills.
     * @example
     * // Create many WorkerSkills
     * const workerSkill = await prisma.workerSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerSkillCreateManyArgs>(args?: SelectSubset<T, WorkerSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkerSkill.
     * @param {WorkerSkillDeleteArgs} args - Arguments to delete one WorkerSkill.
     * @example
     * // Delete one WorkerSkill
     * const WorkerSkill = await prisma.workerSkill.delete({
     *   where: {
     *     // ... filter to delete one WorkerSkill
     *   }
     * })
     * 
     */
    delete<T extends WorkerSkillDeleteArgs>(args: SelectSubset<T, WorkerSkillDeleteArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkerSkill.
     * @param {WorkerSkillUpdateArgs} args - Arguments to update one WorkerSkill.
     * @example
     * // Update one WorkerSkill
     * const workerSkill = await prisma.workerSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerSkillUpdateArgs>(args: SelectSubset<T, WorkerSkillUpdateArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkerSkills.
     * @param {WorkerSkillDeleteManyArgs} args - Arguments to filter WorkerSkills to delete.
     * @example
     * // Delete a few WorkerSkills
     * const { count } = await prisma.workerSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerSkillDeleteManyArgs>(args?: SelectSubset<T, WorkerSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkerSkills
     * const workerSkill = await prisma.workerSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerSkillUpdateManyArgs>(args: SelectSubset<T, WorkerSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkerSkill.
     * @param {WorkerSkillUpsertArgs} args - Arguments to update or create a WorkerSkill.
     * @example
     * // Update or create a WorkerSkill
     * const workerSkill = await prisma.workerSkill.upsert({
     *   create: {
     *     // ... data to create a WorkerSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkerSkill we want to update
     *   }
     * })
     */
    upsert<T extends WorkerSkillUpsertArgs>(args: SelectSubset<T, WorkerSkillUpsertArgs<ExtArgs>>): Prisma__WorkerSkillClient<$Result.GetResult<Prisma.$WorkerSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillCountArgs} args - Arguments to filter WorkerSkills to count.
     * @example
     * // Count the number of WorkerSkills
     * const count = await prisma.workerSkill.count({
     *   where: {
     *     // ... the filter for the WorkerSkills we want to count
     *   }
     * })
    **/
    count<T extends WorkerSkillCountArgs>(
      args?: Subset<T, WorkerSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerSkillAggregateArgs>(args: Subset<T, WorkerSkillAggregateArgs>): Prisma.PrismaPromise<GetWorkerSkillAggregateType<T>>

    /**
     * Group by WorkerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerSkillGroupByArgs['orderBy'] }
        : { orderBy?: WorkerSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkerSkill model
   */
  readonly fields: WorkerSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkerSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkerSkill model
   */
  interface WorkerSkillFieldRefs {
    readonly id: FieldRef<"WorkerSkill", 'Int'>
    readonly userId: FieldRef<"WorkerSkill", 'Int'>
    readonly stage: FieldRef<"WorkerSkill", 'String'>
    readonly createdAt: FieldRef<"WorkerSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkerSkill findUnique
   */
  export type WorkerSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * Filter, which WorkerSkill to fetch.
     */
    where: WorkerSkillWhereUniqueInput
  }

  /**
   * WorkerSkill findUniqueOrThrow
   */
  export type WorkerSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * Filter, which WorkerSkill to fetch.
     */
    where: WorkerSkillWhereUniqueInput
  }

  /**
   * WorkerSkill findFirst
   */
  export type WorkerSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * Filter, which WorkerSkill to fetch.
     */
    where?: WorkerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerSkills to fetch.
     */
    orderBy?: WorkerSkillOrderByWithRelationInput | WorkerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerSkills.
     */
    cursor?: WorkerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerSkills.
     */
    distinct?: WorkerSkillScalarFieldEnum | WorkerSkillScalarFieldEnum[]
  }

  /**
   * WorkerSkill findFirstOrThrow
   */
  export type WorkerSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * Filter, which WorkerSkill to fetch.
     */
    where?: WorkerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerSkills to fetch.
     */
    orderBy?: WorkerSkillOrderByWithRelationInput | WorkerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerSkills.
     */
    cursor?: WorkerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerSkills.
     */
    distinct?: WorkerSkillScalarFieldEnum | WorkerSkillScalarFieldEnum[]
  }

  /**
   * WorkerSkill findMany
   */
  export type WorkerSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * Filter, which WorkerSkills to fetch.
     */
    where?: WorkerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerSkills to fetch.
     */
    orderBy?: WorkerSkillOrderByWithRelationInput | WorkerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkerSkills.
     */
    cursor?: WorkerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerSkills.
     */
    skip?: number
    distinct?: WorkerSkillScalarFieldEnum | WorkerSkillScalarFieldEnum[]
  }

  /**
   * WorkerSkill create
   */
  export type WorkerSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkerSkill.
     */
    data: XOR<WorkerSkillCreateInput, WorkerSkillUncheckedCreateInput>
  }

  /**
   * WorkerSkill createMany
   */
  export type WorkerSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkerSkills.
     */
    data: WorkerSkillCreateManyInput | WorkerSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkerSkill update
   */
  export type WorkerSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkerSkill.
     */
    data: XOR<WorkerSkillUpdateInput, WorkerSkillUncheckedUpdateInput>
    /**
     * Choose, which WorkerSkill to update.
     */
    where: WorkerSkillWhereUniqueInput
  }

  /**
   * WorkerSkill updateMany
   */
  export type WorkerSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkerSkills.
     */
    data: XOR<WorkerSkillUpdateManyMutationInput, WorkerSkillUncheckedUpdateManyInput>
    /**
     * Filter which WorkerSkills to update
     */
    where?: WorkerSkillWhereInput
    /**
     * Limit how many WorkerSkills to update.
     */
    limit?: number
  }

  /**
   * WorkerSkill upsert
   */
  export type WorkerSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkerSkill to update in case it exists.
     */
    where: WorkerSkillWhereUniqueInput
    /**
     * In case the WorkerSkill found by the `where` argument doesn't exist, create a new WorkerSkill with this data.
     */
    create: XOR<WorkerSkillCreateInput, WorkerSkillUncheckedCreateInput>
    /**
     * In case the WorkerSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerSkillUpdateInput, WorkerSkillUncheckedUpdateInput>
  }

  /**
   * WorkerSkill delete
   */
  export type WorkerSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
    /**
     * Filter which WorkerSkill to delete.
     */
    where: WorkerSkillWhereUniqueInput
  }

  /**
   * WorkerSkill deleteMany
   */
  export type WorkerSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerSkills to delete
     */
    where?: WorkerSkillWhereInput
    /**
     * Limit how many WorkerSkills to delete.
     */
    limit?: number
  }

  /**
   * WorkerSkill without action
   */
  export type WorkerSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerSkill
     */
    select?: WorkerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerSkill
     */
    omit?: WorkerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerSkillInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    phone: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    phone: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    code: number
    name: number
    phone: number
    address: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    phone?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    phone?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    phone?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    code: string
    name: string
    phone: string | null
    address: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "phone" | "address" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      orders: Prisma.$WorkshopOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      phone: string | null
      address: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly code: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    where?: WorkshopOrderWhereInput
    orderBy?: WorkshopOrderOrderByWithRelationInput | WorkshopOrderOrderByWithRelationInput[]
    cursor?: WorkshopOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkshopOrderScalarFieldEnum | WorkshopOrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model WorkshopOrder
   */

  export type AggregateWorkshopOrder = {
    _count: WorkshopOrderCountAggregateOutputType | null
    _avg: WorkshopOrderAvgAggregateOutputType | null
    _sum: WorkshopOrderSumAggregateOutputType | null
    _min: WorkshopOrderMinAggregateOutputType | null
    _max: WorkshopOrderMaxAggregateOutputType | null
  }

  export type WorkshopOrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type WorkshopOrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type WorkshopOrderMinAggregateOutputType = {
    id: number | null
    code: string | null
    customerId: number | null
    settlementType: $Enums.SettlementType | null
    status: string | null
    satisfactionStatus: string | null
    notes: string | null
    productionStartedAt: Date | null
    productionFinishedAt: Date | null
    deliveredAt: Date | null
    satisfactionDueAt: Date | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkshopOrderMaxAggregateOutputType = {
    id: number | null
    code: string | null
    customerId: number | null
    settlementType: $Enums.SettlementType | null
    status: string | null
    satisfactionStatus: string | null
    notes: string | null
    productionStartedAt: Date | null
    productionFinishedAt: Date | null
    deliveredAt: Date | null
    satisfactionDueAt: Date | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkshopOrderCountAggregateOutputType = {
    id: number
    code: number
    customerId: number
    settlementType: number
    status: number
    satisfactionStatus: number
    notes: number
    productionStartedAt: number
    productionFinishedAt: number
    deliveredAt: number
    satisfactionDueAt: number
    closedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkshopOrderAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type WorkshopOrderSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type WorkshopOrderMinAggregateInputType = {
    id?: true
    code?: true
    customerId?: true
    settlementType?: true
    status?: true
    satisfactionStatus?: true
    notes?: true
    productionStartedAt?: true
    productionFinishedAt?: true
    deliveredAt?: true
    satisfactionDueAt?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkshopOrderMaxAggregateInputType = {
    id?: true
    code?: true
    customerId?: true
    settlementType?: true
    status?: true
    satisfactionStatus?: true
    notes?: true
    productionStartedAt?: true
    productionFinishedAt?: true
    deliveredAt?: true
    satisfactionDueAt?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkshopOrderCountAggregateInputType = {
    id?: true
    code?: true
    customerId?: true
    settlementType?: true
    status?: true
    satisfactionStatus?: true
    notes?: true
    productionStartedAt?: true
    productionFinishedAt?: true
    deliveredAt?: true
    satisfactionDueAt?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkshopOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkshopOrder to aggregate.
     */
    where?: WorkshopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkshopOrders to fetch.
     */
    orderBy?: WorkshopOrderOrderByWithRelationInput | WorkshopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkshopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkshopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkshopOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkshopOrders
    **/
    _count?: true | WorkshopOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkshopOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkshopOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkshopOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkshopOrderMaxAggregateInputType
  }

  export type GetWorkshopOrderAggregateType<T extends WorkshopOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkshopOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkshopOrder[P]>
      : GetScalarType<T[P], AggregateWorkshopOrder[P]>
  }




  export type WorkshopOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopOrderWhereInput
    orderBy?: WorkshopOrderOrderByWithAggregationInput | WorkshopOrderOrderByWithAggregationInput[]
    by: WorkshopOrderScalarFieldEnum[] | WorkshopOrderScalarFieldEnum
    having?: WorkshopOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkshopOrderCountAggregateInputType | true
    _avg?: WorkshopOrderAvgAggregateInputType
    _sum?: WorkshopOrderSumAggregateInputType
    _min?: WorkshopOrderMinAggregateInputType
    _max?: WorkshopOrderMaxAggregateInputType
  }

  export type WorkshopOrderGroupByOutputType = {
    id: number
    code: string
    customerId: number
    settlementType: $Enums.SettlementType
    status: string
    satisfactionStatus: string
    notes: string | null
    productionStartedAt: Date | null
    productionFinishedAt: Date | null
    deliveredAt: Date | null
    satisfactionDueAt: Date | null
    closedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorkshopOrderCountAggregateOutputType | null
    _avg: WorkshopOrderAvgAggregateOutputType | null
    _sum: WorkshopOrderSumAggregateOutputType | null
    _min: WorkshopOrderMinAggregateOutputType | null
    _max: WorkshopOrderMaxAggregateOutputType | null
  }

  type GetWorkshopOrderGroupByPayload<T extends WorkshopOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkshopOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkshopOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkshopOrderGroupByOutputType[P]>
            : GetScalarType<T[P], WorkshopOrderGroupByOutputType[P]>
        }
      >
    >


  export type WorkshopOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    customerId?: boolean
    settlementType?: boolean
    status?: boolean
    satisfactionStatus?: boolean
    notes?: boolean
    productionStartedAt?: boolean
    productionFinishedAt?: boolean
    deliveredAt?: boolean
    satisfactionDueAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    rollers?: boolean | WorkshopOrder$rollersArgs<ExtArgs>
    satisfactionFeedbacks?: boolean | WorkshopOrder$satisfactionFeedbacksArgs<ExtArgs>
    _count?: boolean | WorkshopOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workshopOrder"]>



  export type WorkshopOrderSelectScalar = {
    id?: boolean
    code?: boolean
    customerId?: boolean
    settlementType?: boolean
    status?: boolean
    satisfactionStatus?: boolean
    notes?: boolean
    productionStartedAt?: boolean
    productionFinishedAt?: boolean
    deliveredAt?: boolean
    satisfactionDueAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkshopOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "customerId" | "settlementType" | "status" | "satisfactionStatus" | "notes" | "productionStartedAt" | "productionFinishedAt" | "deliveredAt" | "satisfactionDueAt" | "closedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["workshopOrder"]>
  export type WorkshopOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    rollers?: boolean | WorkshopOrder$rollersArgs<ExtArgs>
    satisfactionFeedbacks?: boolean | WorkshopOrder$satisfactionFeedbacksArgs<ExtArgs>
    _count?: boolean | WorkshopOrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkshopOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkshopOrder"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      rollers: Prisma.$RollerPayload<ExtArgs>[]
      satisfactionFeedbacks: Prisma.$SatisfactionFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      customerId: number
      settlementType: $Enums.SettlementType
      status: string
      satisfactionStatus: string
      notes: string | null
      productionStartedAt: Date | null
      productionFinishedAt: Date | null
      deliveredAt: Date | null
      satisfactionDueAt: Date | null
      closedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workshopOrder"]>
    composites: {}
  }

  type WorkshopOrderGetPayload<S extends boolean | null | undefined | WorkshopOrderDefaultArgs> = $Result.GetResult<Prisma.$WorkshopOrderPayload, S>

  type WorkshopOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkshopOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkshopOrderCountAggregateInputType | true
    }

  export interface WorkshopOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkshopOrder'], meta: { name: 'WorkshopOrder' } }
    /**
     * Find zero or one WorkshopOrder that matches the filter.
     * @param {WorkshopOrderFindUniqueArgs} args - Arguments to find a WorkshopOrder
     * @example
     * // Get one WorkshopOrder
     * const workshopOrder = await prisma.workshopOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkshopOrderFindUniqueArgs>(args: SelectSubset<T, WorkshopOrderFindUniqueArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkshopOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkshopOrderFindUniqueOrThrowArgs} args - Arguments to find a WorkshopOrder
     * @example
     * // Get one WorkshopOrder
     * const workshopOrder = await prisma.workshopOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkshopOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkshopOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkshopOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderFindFirstArgs} args - Arguments to find a WorkshopOrder
     * @example
     * // Get one WorkshopOrder
     * const workshopOrder = await prisma.workshopOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkshopOrderFindFirstArgs>(args?: SelectSubset<T, WorkshopOrderFindFirstArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkshopOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderFindFirstOrThrowArgs} args - Arguments to find a WorkshopOrder
     * @example
     * // Get one WorkshopOrder
     * const workshopOrder = await prisma.workshopOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkshopOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkshopOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkshopOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkshopOrders
     * const workshopOrders = await prisma.workshopOrder.findMany()
     * 
     * // Get first 10 WorkshopOrders
     * const workshopOrders = await prisma.workshopOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workshopOrderWithIdOnly = await prisma.workshopOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkshopOrderFindManyArgs>(args?: SelectSubset<T, WorkshopOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkshopOrder.
     * @param {WorkshopOrderCreateArgs} args - Arguments to create a WorkshopOrder.
     * @example
     * // Create one WorkshopOrder
     * const WorkshopOrder = await prisma.workshopOrder.create({
     *   data: {
     *     // ... data to create a WorkshopOrder
     *   }
     * })
     * 
     */
    create<T extends WorkshopOrderCreateArgs>(args: SelectSubset<T, WorkshopOrderCreateArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkshopOrders.
     * @param {WorkshopOrderCreateManyArgs} args - Arguments to create many WorkshopOrders.
     * @example
     * // Create many WorkshopOrders
     * const workshopOrder = await prisma.workshopOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkshopOrderCreateManyArgs>(args?: SelectSubset<T, WorkshopOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkshopOrder.
     * @param {WorkshopOrderDeleteArgs} args - Arguments to delete one WorkshopOrder.
     * @example
     * // Delete one WorkshopOrder
     * const WorkshopOrder = await prisma.workshopOrder.delete({
     *   where: {
     *     // ... filter to delete one WorkshopOrder
     *   }
     * })
     * 
     */
    delete<T extends WorkshopOrderDeleteArgs>(args: SelectSubset<T, WorkshopOrderDeleteArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkshopOrder.
     * @param {WorkshopOrderUpdateArgs} args - Arguments to update one WorkshopOrder.
     * @example
     * // Update one WorkshopOrder
     * const workshopOrder = await prisma.workshopOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkshopOrderUpdateArgs>(args: SelectSubset<T, WorkshopOrderUpdateArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkshopOrders.
     * @param {WorkshopOrderDeleteManyArgs} args - Arguments to filter WorkshopOrders to delete.
     * @example
     * // Delete a few WorkshopOrders
     * const { count } = await prisma.workshopOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkshopOrderDeleteManyArgs>(args?: SelectSubset<T, WorkshopOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkshopOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkshopOrders
     * const workshopOrder = await prisma.workshopOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkshopOrderUpdateManyArgs>(args: SelectSubset<T, WorkshopOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkshopOrder.
     * @param {WorkshopOrderUpsertArgs} args - Arguments to update or create a WorkshopOrder.
     * @example
     * // Update or create a WorkshopOrder
     * const workshopOrder = await prisma.workshopOrder.upsert({
     *   create: {
     *     // ... data to create a WorkshopOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkshopOrder we want to update
     *   }
     * })
     */
    upsert<T extends WorkshopOrderUpsertArgs>(args: SelectSubset<T, WorkshopOrderUpsertArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkshopOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderCountArgs} args - Arguments to filter WorkshopOrders to count.
     * @example
     * // Count the number of WorkshopOrders
     * const count = await prisma.workshopOrder.count({
     *   where: {
     *     // ... the filter for the WorkshopOrders we want to count
     *   }
     * })
    **/
    count<T extends WorkshopOrderCountArgs>(
      args?: Subset<T, WorkshopOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkshopOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkshopOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkshopOrderAggregateArgs>(args: Subset<T, WorkshopOrderAggregateArgs>): Prisma.PrismaPromise<GetWorkshopOrderAggregateType<T>>

    /**
     * Group by WorkshopOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkshopOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkshopOrderGroupByArgs['orderBy'] }
        : { orderBy?: WorkshopOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkshopOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkshopOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkshopOrder model
   */
  readonly fields: WorkshopOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkshopOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkshopOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rollers<T extends WorkshopOrder$rollersArgs<ExtArgs> = {}>(args?: Subset<T, WorkshopOrder$rollersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    satisfactionFeedbacks<T extends WorkshopOrder$satisfactionFeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, WorkshopOrder$satisfactionFeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkshopOrder model
   */
  interface WorkshopOrderFieldRefs {
    readonly id: FieldRef<"WorkshopOrder", 'Int'>
    readonly code: FieldRef<"WorkshopOrder", 'String'>
    readonly customerId: FieldRef<"WorkshopOrder", 'Int'>
    readonly settlementType: FieldRef<"WorkshopOrder", 'SettlementType'>
    readonly status: FieldRef<"WorkshopOrder", 'String'>
    readonly satisfactionStatus: FieldRef<"WorkshopOrder", 'String'>
    readonly notes: FieldRef<"WorkshopOrder", 'String'>
    readonly productionStartedAt: FieldRef<"WorkshopOrder", 'DateTime'>
    readonly productionFinishedAt: FieldRef<"WorkshopOrder", 'DateTime'>
    readonly deliveredAt: FieldRef<"WorkshopOrder", 'DateTime'>
    readonly satisfactionDueAt: FieldRef<"WorkshopOrder", 'DateTime'>
    readonly closedAt: FieldRef<"WorkshopOrder", 'DateTime'>
    readonly createdAt: FieldRef<"WorkshopOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkshopOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkshopOrder findUnique
   */
  export type WorkshopOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkshopOrder to fetch.
     */
    where: WorkshopOrderWhereUniqueInput
  }

  /**
   * WorkshopOrder findUniqueOrThrow
   */
  export type WorkshopOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkshopOrder to fetch.
     */
    where: WorkshopOrderWhereUniqueInput
  }

  /**
   * WorkshopOrder findFirst
   */
  export type WorkshopOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkshopOrder to fetch.
     */
    where?: WorkshopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkshopOrders to fetch.
     */
    orderBy?: WorkshopOrderOrderByWithRelationInput | WorkshopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkshopOrders.
     */
    cursor?: WorkshopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkshopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkshopOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkshopOrders.
     */
    distinct?: WorkshopOrderScalarFieldEnum | WorkshopOrderScalarFieldEnum[]
  }

  /**
   * WorkshopOrder findFirstOrThrow
   */
  export type WorkshopOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkshopOrder to fetch.
     */
    where?: WorkshopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkshopOrders to fetch.
     */
    orderBy?: WorkshopOrderOrderByWithRelationInput | WorkshopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkshopOrders.
     */
    cursor?: WorkshopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkshopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkshopOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkshopOrders.
     */
    distinct?: WorkshopOrderScalarFieldEnum | WorkshopOrderScalarFieldEnum[]
  }

  /**
   * WorkshopOrder findMany
   */
  export type WorkshopOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkshopOrders to fetch.
     */
    where?: WorkshopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkshopOrders to fetch.
     */
    orderBy?: WorkshopOrderOrderByWithRelationInput | WorkshopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkshopOrders.
     */
    cursor?: WorkshopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkshopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkshopOrders.
     */
    skip?: number
    distinct?: WorkshopOrderScalarFieldEnum | WorkshopOrderScalarFieldEnum[]
  }

  /**
   * WorkshopOrder create
   */
  export type WorkshopOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkshopOrder.
     */
    data: XOR<WorkshopOrderCreateInput, WorkshopOrderUncheckedCreateInput>
  }

  /**
   * WorkshopOrder createMany
   */
  export type WorkshopOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkshopOrders.
     */
    data: WorkshopOrderCreateManyInput | WorkshopOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkshopOrder update
   */
  export type WorkshopOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkshopOrder.
     */
    data: XOR<WorkshopOrderUpdateInput, WorkshopOrderUncheckedUpdateInput>
    /**
     * Choose, which WorkshopOrder to update.
     */
    where: WorkshopOrderWhereUniqueInput
  }

  /**
   * WorkshopOrder updateMany
   */
  export type WorkshopOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkshopOrders.
     */
    data: XOR<WorkshopOrderUpdateManyMutationInput, WorkshopOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkshopOrders to update
     */
    where?: WorkshopOrderWhereInput
    /**
     * Limit how many WorkshopOrders to update.
     */
    limit?: number
  }

  /**
   * WorkshopOrder upsert
   */
  export type WorkshopOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkshopOrder to update in case it exists.
     */
    where: WorkshopOrderWhereUniqueInput
    /**
     * In case the WorkshopOrder found by the `where` argument doesn't exist, create a new WorkshopOrder with this data.
     */
    create: XOR<WorkshopOrderCreateInput, WorkshopOrderUncheckedCreateInput>
    /**
     * In case the WorkshopOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkshopOrderUpdateInput, WorkshopOrderUncheckedUpdateInput>
  }

  /**
   * WorkshopOrder delete
   */
  export type WorkshopOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    /**
     * Filter which WorkshopOrder to delete.
     */
    where: WorkshopOrderWhereUniqueInput
  }

  /**
   * WorkshopOrder deleteMany
   */
  export type WorkshopOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkshopOrders to delete
     */
    where?: WorkshopOrderWhereInput
    /**
     * Limit how many WorkshopOrders to delete.
     */
    limit?: number
  }

  /**
   * WorkshopOrder.rollers
   */
  export type WorkshopOrder$rollersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    where?: RollerWhereInput
    orderBy?: RollerOrderByWithRelationInput | RollerOrderByWithRelationInput[]
    cursor?: RollerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RollerScalarFieldEnum | RollerScalarFieldEnum[]
  }

  /**
   * WorkshopOrder.satisfactionFeedbacks
   */
  export type WorkshopOrder$satisfactionFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    where?: SatisfactionFeedbackWhereInput
    orderBy?: SatisfactionFeedbackOrderByWithRelationInput | SatisfactionFeedbackOrderByWithRelationInput[]
    cursor?: SatisfactionFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatisfactionFeedbackScalarFieldEnum | SatisfactionFeedbackScalarFieldEnum[]
  }

  /**
   * WorkshopOrder without action
   */
  export type WorkshopOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
  }


  /**
   * Model SatisfactionFeedback
   */

  export type AggregateSatisfactionFeedback = {
    _count: SatisfactionFeedbackCountAggregateOutputType | null
    _avg: SatisfactionFeedbackAvgAggregateOutputType | null
    _sum: SatisfactionFeedbackSumAggregateOutputType | null
    _min: SatisfactionFeedbackMinAggregateOutputType | null
    _max: SatisfactionFeedbackMaxAggregateOutputType | null
  }

  export type SatisfactionFeedbackAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type SatisfactionFeedbackSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type SatisfactionFeedbackMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    result: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type SatisfactionFeedbackMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    result: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type SatisfactionFeedbackCountAggregateOutputType = {
    id: number
    orderId: number
    result: number
    reason: number
    createdAt: number
    _all: number
  }


  export type SatisfactionFeedbackAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type SatisfactionFeedbackSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type SatisfactionFeedbackMinAggregateInputType = {
    id?: true
    orderId?: true
    result?: true
    reason?: true
    createdAt?: true
  }

  export type SatisfactionFeedbackMaxAggregateInputType = {
    id?: true
    orderId?: true
    result?: true
    reason?: true
    createdAt?: true
  }

  export type SatisfactionFeedbackCountAggregateInputType = {
    id?: true
    orderId?: true
    result?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type SatisfactionFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatisfactionFeedback to aggregate.
     */
    where?: SatisfactionFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionFeedbacks to fetch.
     */
    orderBy?: SatisfactionFeedbackOrderByWithRelationInput | SatisfactionFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatisfactionFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SatisfactionFeedbacks
    **/
    _count?: true | SatisfactionFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SatisfactionFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SatisfactionFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatisfactionFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatisfactionFeedbackMaxAggregateInputType
  }

  export type GetSatisfactionFeedbackAggregateType<T extends SatisfactionFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateSatisfactionFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatisfactionFeedback[P]>
      : GetScalarType<T[P], AggregateSatisfactionFeedback[P]>
  }




  export type SatisfactionFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatisfactionFeedbackWhereInput
    orderBy?: SatisfactionFeedbackOrderByWithAggregationInput | SatisfactionFeedbackOrderByWithAggregationInput[]
    by: SatisfactionFeedbackScalarFieldEnum[] | SatisfactionFeedbackScalarFieldEnum
    having?: SatisfactionFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatisfactionFeedbackCountAggregateInputType | true
    _avg?: SatisfactionFeedbackAvgAggregateInputType
    _sum?: SatisfactionFeedbackSumAggregateInputType
    _min?: SatisfactionFeedbackMinAggregateInputType
    _max?: SatisfactionFeedbackMaxAggregateInputType
  }

  export type SatisfactionFeedbackGroupByOutputType = {
    id: number
    orderId: number
    result: string
    reason: string | null
    createdAt: Date
    _count: SatisfactionFeedbackCountAggregateOutputType | null
    _avg: SatisfactionFeedbackAvgAggregateOutputType | null
    _sum: SatisfactionFeedbackSumAggregateOutputType | null
    _min: SatisfactionFeedbackMinAggregateOutputType | null
    _max: SatisfactionFeedbackMaxAggregateOutputType | null
  }

  type GetSatisfactionFeedbackGroupByPayload<T extends SatisfactionFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatisfactionFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatisfactionFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatisfactionFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], SatisfactionFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type SatisfactionFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    result?: boolean
    reason?: boolean
    createdAt?: boolean
    order?: boolean | WorkshopOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satisfactionFeedback"]>



  export type SatisfactionFeedbackSelectScalar = {
    id?: boolean
    orderId?: boolean
    result?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type SatisfactionFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "result" | "reason" | "createdAt", ExtArgs["result"]["satisfactionFeedback"]>
  export type SatisfactionFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | WorkshopOrderDefaultArgs<ExtArgs>
  }

  export type $SatisfactionFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SatisfactionFeedback"
    objects: {
      order: Prisma.$WorkshopOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      result: string
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["satisfactionFeedback"]>
    composites: {}
  }

  type SatisfactionFeedbackGetPayload<S extends boolean | null | undefined | SatisfactionFeedbackDefaultArgs> = $Result.GetResult<Prisma.$SatisfactionFeedbackPayload, S>

  type SatisfactionFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SatisfactionFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SatisfactionFeedbackCountAggregateInputType | true
    }

  export interface SatisfactionFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SatisfactionFeedback'], meta: { name: 'SatisfactionFeedback' } }
    /**
     * Find zero or one SatisfactionFeedback that matches the filter.
     * @param {SatisfactionFeedbackFindUniqueArgs} args - Arguments to find a SatisfactionFeedback
     * @example
     * // Get one SatisfactionFeedback
     * const satisfactionFeedback = await prisma.satisfactionFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatisfactionFeedbackFindUniqueArgs>(args: SelectSubset<T, SatisfactionFeedbackFindUniqueArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SatisfactionFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatisfactionFeedbackFindUniqueOrThrowArgs} args - Arguments to find a SatisfactionFeedback
     * @example
     * // Get one SatisfactionFeedback
     * const satisfactionFeedback = await prisma.satisfactionFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatisfactionFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, SatisfactionFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SatisfactionFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackFindFirstArgs} args - Arguments to find a SatisfactionFeedback
     * @example
     * // Get one SatisfactionFeedback
     * const satisfactionFeedback = await prisma.satisfactionFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatisfactionFeedbackFindFirstArgs>(args?: SelectSubset<T, SatisfactionFeedbackFindFirstArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SatisfactionFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackFindFirstOrThrowArgs} args - Arguments to find a SatisfactionFeedback
     * @example
     * // Get one SatisfactionFeedback
     * const satisfactionFeedback = await prisma.satisfactionFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatisfactionFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, SatisfactionFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SatisfactionFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SatisfactionFeedbacks
     * const satisfactionFeedbacks = await prisma.satisfactionFeedback.findMany()
     * 
     * // Get first 10 SatisfactionFeedbacks
     * const satisfactionFeedbacks = await prisma.satisfactionFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satisfactionFeedbackWithIdOnly = await prisma.satisfactionFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SatisfactionFeedbackFindManyArgs>(args?: SelectSubset<T, SatisfactionFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SatisfactionFeedback.
     * @param {SatisfactionFeedbackCreateArgs} args - Arguments to create a SatisfactionFeedback.
     * @example
     * // Create one SatisfactionFeedback
     * const SatisfactionFeedback = await prisma.satisfactionFeedback.create({
     *   data: {
     *     // ... data to create a SatisfactionFeedback
     *   }
     * })
     * 
     */
    create<T extends SatisfactionFeedbackCreateArgs>(args: SelectSubset<T, SatisfactionFeedbackCreateArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SatisfactionFeedbacks.
     * @param {SatisfactionFeedbackCreateManyArgs} args - Arguments to create many SatisfactionFeedbacks.
     * @example
     * // Create many SatisfactionFeedbacks
     * const satisfactionFeedback = await prisma.satisfactionFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SatisfactionFeedbackCreateManyArgs>(args?: SelectSubset<T, SatisfactionFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SatisfactionFeedback.
     * @param {SatisfactionFeedbackDeleteArgs} args - Arguments to delete one SatisfactionFeedback.
     * @example
     * // Delete one SatisfactionFeedback
     * const SatisfactionFeedback = await prisma.satisfactionFeedback.delete({
     *   where: {
     *     // ... filter to delete one SatisfactionFeedback
     *   }
     * })
     * 
     */
    delete<T extends SatisfactionFeedbackDeleteArgs>(args: SelectSubset<T, SatisfactionFeedbackDeleteArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SatisfactionFeedback.
     * @param {SatisfactionFeedbackUpdateArgs} args - Arguments to update one SatisfactionFeedback.
     * @example
     * // Update one SatisfactionFeedback
     * const satisfactionFeedback = await prisma.satisfactionFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SatisfactionFeedbackUpdateArgs>(args: SelectSubset<T, SatisfactionFeedbackUpdateArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SatisfactionFeedbacks.
     * @param {SatisfactionFeedbackDeleteManyArgs} args - Arguments to filter SatisfactionFeedbacks to delete.
     * @example
     * // Delete a few SatisfactionFeedbacks
     * const { count } = await prisma.satisfactionFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SatisfactionFeedbackDeleteManyArgs>(args?: SelectSubset<T, SatisfactionFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatisfactionFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SatisfactionFeedbacks
     * const satisfactionFeedback = await prisma.satisfactionFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SatisfactionFeedbackUpdateManyArgs>(args: SelectSubset<T, SatisfactionFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SatisfactionFeedback.
     * @param {SatisfactionFeedbackUpsertArgs} args - Arguments to update or create a SatisfactionFeedback.
     * @example
     * // Update or create a SatisfactionFeedback
     * const satisfactionFeedback = await prisma.satisfactionFeedback.upsert({
     *   create: {
     *     // ... data to create a SatisfactionFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SatisfactionFeedback we want to update
     *   }
     * })
     */
    upsert<T extends SatisfactionFeedbackUpsertArgs>(args: SelectSubset<T, SatisfactionFeedbackUpsertArgs<ExtArgs>>): Prisma__SatisfactionFeedbackClient<$Result.GetResult<Prisma.$SatisfactionFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SatisfactionFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackCountArgs} args - Arguments to filter SatisfactionFeedbacks to count.
     * @example
     * // Count the number of SatisfactionFeedbacks
     * const count = await prisma.satisfactionFeedback.count({
     *   where: {
     *     // ... the filter for the SatisfactionFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends SatisfactionFeedbackCountArgs>(
      args?: Subset<T, SatisfactionFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatisfactionFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SatisfactionFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SatisfactionFeedbackAggregateArgs>(args: Subset<T, SatisfactionFeedbackAggregateArgs>): Prisma.PrismaPromise<GetSatisfactionFeedbackAggregateType<T>>

    /**
     * Group by SatisfactionFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SatisfactionFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatisfactionFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: SatisfactionFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SatisfactionFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatisfactionFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SatisfactionFeedback model
   */
  readonly fields: SatisfactionFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SatisfactionFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatisfactionFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends WorkshopOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkshopOrderDefaultArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SatisfactionFeedback model
   */
  interface SatisfactionFeedbackFieldRefs {
    readonly id: FieldRef<"SatisfactionFeedback", 'Int'>
    readonly orderId: FieldRef<"SatisfactionFeedback", 'Int'>
    readonly result: FieldRef<"SatisfactionFeedback", 'String'>
    readonly reason: FieldRef<"SatisfactionFeedback", 'String'>
    readonly createdAt: FieldRef<"SatisfactionFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SatisfactionFeedback findUnique
   */
  export type SatisfactionFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionFeedback to fetch.
     */
    where: SatisfactionFeedbackWhereUniqueInput
  }

  /**
   * SatisfactionFeedback findUniqueOrThrow
   */
  export type SatisfactionFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionFeedback to fetch.
     */
    where: SatisfactionFeedbackWhereUniqueInput
  }

  /**
   * SatisfactionFeedback findFirst
   */
  export type SatisfactionFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionFeedback to fetch.
     */
    where?: SatisfactionFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionFeedbacks to fetch.
     */
    orderBy?: SatisfactionFeedbackOrderByWithRelationInput | SatisfactionFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatisfactionFeedbacks.
     */
    cursor?: SatisfactionFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatisfactionFeedbacks.
     */
    distinct?: SatisfactionFeedbackScalarFieldEnum | SatisfactionFeedbackScalarFieldEnum[]
  }

  /**
   * SatisfactionFeedback findFirstOrThrow
   */
  export type SatisfactionFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionFeedback to fetch.
     */
    where?: SatisfactionFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionFeedbacks to fetch.
     */
    orderBy?: SatisfactionFeedbackOrderByWithRelationInput | SatisfactionFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatisfactionFeedbacks.
     */
    cursor?: SatisfactionFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatisfactionFeedbacks.
     */
    distinct?: SatisfactionFeedbackScalarFieldEnum | SatisfactionFeedbackScalarFieldEnum[]
  }

  /**
   * SatisfactionFeedback findMany
   */
  export type SatisfactionFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionFeedbacks to fetch.
     */
    where?: SatisfactionFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionFeedbacks to fetch.
     */
    orderBy?: SatisfactionFeedbackOrderByWithRelationInput | SatisfactionFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SatisfactionFeedbacks.
     */
    cursor?: SatisfactionFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionFeedbacks.
     */
    skip?: number
    distinct?: SatisfactionFeedbackScalarFieldEnum | SatisfactionFeedbackScalarFieldEnum[]
  }

  /**
   * SatisfactionFeedback create
   */
  export type SatisfactionFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a SatisfactionFeedback.
     */
    data: XOR<SatisfactionFeedbackCreateInput, SatisfactionFeedbackUncheckedCreateInput>
  }

  /**
   * SatisfactionFeedback createMany
   */
  export type SatisfactionFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SatisfactionFeedbacks.
     */
    data: SatisfactionFeedbackCreateManyInput | SatisfactionFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SatisfactionFeedback update
   */
  export type SatisfactionFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a SatisfactionFeedback.
     */
    data: XOR<SatisfactionFeedbackUpdateInput, SatisfactionFeedbackUncheckedUpdateInput>
    /**
     * Choose, which SatisfactionFeedback to update.
     */
    where: SatisfactionFeedbackWhereUniqueInput
  }

  /**
   * SatisfactionFeedback updateMany
   */
  export type SatisfactionFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SatisfactionFeedbacks.
     */
    data: XOR<SatisfactionFeedbackUpdateManyMutationInput, SatisfactionFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which SatisfactionFeedbacks to update
     */
    where?: SatisfactionFeedbackWhereInput
    /**
     * Limit how many SatisfactionFeedbacks to update.
     */
    limit?: number
  }

  /**
   * SatisfactionFeedback upsert
   */
  export type SatisfactionFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the SatisfactionFeedback to update in case it exists.
     */
    where: SatisfactionFeedbackWhereUniqueInput
    /**
     * In case the SatisfactionFeedback found by the `where` argument doesn't exist, create a new SatisfactionFeedback with this data.
     */
    create: XOR<SatisfactionFeedbackCreateInput, SatisfactionFeedbackUncheckedCreateInput>
    /**
     * In case the SatisfactionFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatisfactionFeedbackUpdateInput, SatisfactionFeedbackUncheckedUpdateInput>
  }

  /**
   * SatisfactionFeedback delete
   */
  export type SatisfactionFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
    /**
     * Filter which SatisfactionFeedback to delete.
     */
    where: SatisfactionFeedbackWhereUniqueInput
  }

  /**
   * SatisfactionFeedback deleteMany
   */
  export type SatisfactionFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatisfactionFeedbacks to delete
     */
    where?: SatisfactionFeedbackWhereInput
    /**
     * Limit how many SatisfactionFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * SatisfactionFeedback without action
   */
  export type SatisfactionFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionFeedback
     */
    select?: SatisfactionFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatisfactionFeedback
     */
    omit?: SatisfactionFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfactionFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceEvent
   */

  export type AggregateAttendanceEvent = {
    _count: AttendanceEventCountAggregateOutputType | null
    _avg: AttendanceEventAvgAggregateOutputType | null
    _sum: AttendanceEventSumAggregateOutputType | null
    _min: AttendanceEventMinAggregateOutputType | null
    _max: AttendanceEventMaxAggregateOutputType | null
  }

  export type AttendanceEventAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AttendanceEventSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AttendanceEventMinAggregateOutputType = {
    id: number | null
    userId: number | null
    workerName: string | null
    type: $Enums.AttendanceType | null
    note: string | null
    eventAt: Date | null
    eventDateFa: string | null
    eventTimeFa: string | null
    eventMonthFa: string | null
    createdAt: Date | null
  }

  export type AttendanceEventMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    workerName: string | null
    type: $Enums.AttendanceType | null
    note: string | null
    eventAt: Date | null
    eventDateFa: string | null
    eventTimeFa: string | null
    eventMonthFa: string | null
    createdAt: Date | null
  }

  export type AttendanceEventCountAggregateOutputType = {
    id: number
    userId: number
    workerName: number
    type: number
    note: number
    eventAt: number
    eventDateFa: number
    eventTimeFa: number
    eventMonthFa: number
    createdAt: number
    _all: number
  }


  export type AttendanceEventAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AttendanceEventSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AttendanceEventMinAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    type?: true
    note?: true
    eventAt?: true
    eventDateFa?: true
    eventTimeFa?: true
    eventMonthFa?: true
    createdAt?: true
  }

  export type AttendanceEventMaxAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    type?: true
    note?: true
    eventAt?: true
    eventDateFa?: true
    eventTimeFa?: true
    eventMonthFa?: true
    createdAt?: true
  }

  export type AttendanceEventCountAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    type?: true
    note?: true
    eventAt?: true
    eventDateFa?: true
    eventTimeFa?: true
    eventMonthFa?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceEvent to aggregate.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceEvents
    **/
    _count?: true | AttendanceEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceEventMaxAggregateInputType
  }

  export type GetAttendanceEventAggregateType<T extends AttendanceEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceEvent[P]>
      : GetScalarType<T[P], AggregateAttendanceEvent[P]>
  }




  export type AttendanceEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceEventWhereInput
    orderBy?: AttendanceEventOrderByWithAggregationInput | AttendanceEventOrderByWithAggregationInput[]
    by: AttendanceEventScalarFieldEnum[] | AttendanceEventScalarFieldEnum
    having?: AttendanceEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceEventCountAggregateInputType | true
    _avg?: AttendanceEventAvgAggregateInputType
    _sum?: AttendanceEventSumAggregateInputType
    _min?: AttendanceEventMinAggregateInputType
    _max?: AttendanceEventMaxAggregateInputType
  }

  export type AttendanceEventGroupByOutputType = {
    id: number
    userId: number | null
    workerName: string
    type: $Enums.AttendanceType
    note: string | null
    eventAt: Date
    eventDateFa: string
    eventTimeFa: string
    eventMonthFa: string
    createdAt: Date
    _count: AttendanceEventCountAggregateOutputType | null
    _avg: AttendanceEventAvgAggregateOutputType | null
    _sum: AttendanceEventSumAggregateOutputType | null
    _min: AttendanceEventMinAggregateOutputType | null
    _max: AttendanceEventMaxAggregateOutputType | null
  }

  type GetAttendanceEventGroupByPayload<T extends AttendanceEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceEventGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceEventGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workerName?: boolean
    type?: boolean
    note?: boolean
    eventAt?: boolean
    eventDateFa?: boolean
    eventTimeFa?: boolean
    eventMonthFa?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["attendanceEvent"]>



  export type AttendanceEventSelectScalar = {
    id?: boolean
    userId?: boolean
    workerName?: boolean
    type?: boolean
    note?: boolean
    eventAt?: boolean
    eventDateFa?: boolean
    eventTimeFa?: boolean
    eventMonthFa?: boolean
    createdAt?: boolean
  }

  export type AttendanceEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workerName" | "type" | "note" | "eventAt" | "eventDateFa" | "eventTimeFa" | "eventMonthFa" | "createdAt", ExtArgs["result"]["attendanceEvent"]>

  export type $AttendanceEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      workerName: string
      type: $Enums.AttendanceType
      note: string | null
      eventAt: Date
      eventDateFa: string
      eventTimeFa: string
      eventMonthFa: string
      createdAt: Date
    }, ExtArgs["result"]["attendanceEvent"]>
    composites: {}
  }

  type AttendanceEventGetPayload<S extends boolean | null | undefined | AttendanceEventDefaultArgs> = $Result.GetResult<Prisma.$AttendanceEventPayload, S>

  type AttendanceEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceEventCountAggregateInputType | true
    }

  export interface AttendanceEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceEvent'], meta: { name: 'AttendanceEvent' } }
    /**
     * Find zero or one AttendanceEvent that matches the filter.
     * @param {AttendanceEventFindUniqueArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceEventFindUniqueArgs>(args: SelectSubset<T, AttendanceEventFindUniqueArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceEventFindUniqueOrThrowArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventFindFirstArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceEventFindFirstArgs>(args?: SelectSubset<T, AttendanceEventFindFirstArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventFindFirstOrThrowArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceEvents
     * const attendanceEvents = await prisma.attendanceEvent.findMany()
     * 
     * // Get first 10 AttendanceEvents
     * const attendanceEvents = await prisma.attendanceEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceEventWithIdOnly = await prisma.attendanceEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceEventFindManyArgs>(args?: SelectSubset<T, AttendanceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceEvent.
     * @param {AttendanceEventCreateArgs} args - Arguments to create a AttendanceEvent.
     * @example
     * // Create one AttendanceEvent
     * const AttendanceEvent = await prisma.attendanceEvent.create({
     *   data: {
     *     // ... data to create a AttendanceEvent
     *   }
     * })
     * 
     */
    create<T extends AttendanceEventCreateArgs>(args: SelectSubset<T, AttendanceEventCreateArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceEvents.
     * @param {AttendanceEventCreateManyArgs} args - Arguments to create many AttendanceEvents.
     * @example
     * // Create many AttendanceEvents
     * const attendanceEvent = await prisma.attendanceEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceEventCreateManyArgs>(args?: SelectSubset<T, AttendanceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttendanceEvent.
     * @param {AttendanceEventDeleteArgs} args - Arguments to delete one AttendanceEvent.
     * @example
     * // Delete one AttendanceEvent
     * const AttendanceEvent = await prisma.attendanceEvent.delete({
     *   where: {
     *     // ... filter to delete one AttendanceEvent
     *   }
     * })
     * 
     */
    delete<T extends AttendanceEventDeleteArgs>(args: SelectSubset<T, AttendanceEventDeleteArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceEvent.
     * @param {AttendanceEventUpdateArgs} args - Arguments to update one AttendanceEvent.
     * @example
     * // Update one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceEventUpdateArgs>(args: SelectSubset<T, AttendanceEventUpdateArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceEvents.
     * @param {AttendanceEventDeleteManyArgs} args - Arguments to filter AttendanceEvents to delete.
     * @example
     * // Delete a few AttendanceEvents
     * const { count } = await prisma.attendanceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceEventDeleteManyArgs>(args?: SelectSubset<T, AttendanceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceEvents
     * const attendanceEvent = await prisma.attendanceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceEventUpdateManyArgs>(args: SelectSubset<T, AttendanceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttendanceEvent.
     * @param {AttendanceEventUpsertArgs} args - Arguments to update or create a AttendanceEvent.
     * @example
     * // Update or create a AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.upsert({
     *   create: {
     *     // ... data to create a AttendanceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceEvent we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceEventUpsertArgs>(args: SelectSubset<T, AttendanceEventUpsertArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventCountArgs} args - Arguments to filter AttendanceEvents to count.
     * @example
     * // Count the number of AttendanceEvents
     * const count = await prisma.attendanceEvent.count({
     *   where: {
     *     // ... the filter for the AttendanceEvents we want to count
     *   }
     * })
    **/
    count<T extends AttendanceEventCountArgs>(
      args?: Subset<T, AttendanceEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceEventAggregateArgs>(args: Subset<T, AttendanceEventAggregateArgs>): Prisma.PrismaPromise<GetAttendanceEventAggregateType<T>>

    /**
     * Group by AttendanceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceEventGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceEvent model
   */
  readonly fields: AttendanceEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceEvent model
   */
  interface AttendanceEventFieldRefs {
    readonly id: FieldRef<"AttendanceEvent", 'Int'>
    readonly userId: FieldRef<"AttendanceEvent", 'Int'>
    readonly workerName: FieldRef<"AttendanceEvent", 'String'>
    readonly type: FieldRef<"AttendanceEvent", 'AttendanceType'>
    readonly note: FieldRef<"AttendanceEvent", 'String'>
    readonly eventAt: FieldRef<"AttendanceEvent", 'DateTime'>
    readonly eventDateFa: FieldRef<"AttendanceEvent", 'String'>
    readonly eventTimeFa: FieldRef<"AttendanceEvent", 'String'>
    readonly eventMonthFa: FieldRef<"AttendanceEvent", 'String'>
    readonly createdAt: FieldRef<"AttendanceEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceEvent findUnique
   */
  export type AttendanceEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent findUniqueOrThrow
   */
  export type AttendanceEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent findFirst
   */
  export type AttendanceEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceEvents.
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceEvents.
     */
    distinct?: AttendanceEventScalarFieldEnum | AttendanceEventScalarFieldEnum[]
  }

  /**
   * AttendanceEvent findFirstOrThrow
   */
  export type AttendanceEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceEvents.
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceEvents.
     */
    distinct?: AttendanceEventScalarFieldEnum | AttendanceEventScalarFieldEnum[]
  }

  /**
   * AttendanceEvent findMany
   */
  export type AttendanceEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceEvents to fetch.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceEvents.
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    distinct?: AttendanceEventScalarFieldEnum | AttendanceEventScalarFieldEnum[]
  }

  /**
   * AttendanceEvent create
   */
  export type AttendanceEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AttendanceEvent.
     */
    data: XOR<AttendanceEventCreateInput, AttendanceEventUncheckedCreateInput>
  }

  /**
   * AttendanceEvent createMany
   */
  export type AttendanceEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceEvents.
     */
    data: AttendanceEventCreateManyInput | AttendanceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceEvent update
   */
  export type AttendanceEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AttendanceEvent.
     */
    data: XOR<AttendanceEventUpdateInput, AttendanceEventUncheckedUpdateInput>
    /**
     * Choose, which AttendanceEvent to update.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent updateMany
   */
  export type AttendanceEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceEvents.
     */
    data: XOR<AttendanceEventUpdateManyMutationInput, AttendanceEventUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceEvents to update
     */
    where?: AttendanceEventWhereInput
    /**
     * Limit how many AttendanceEvents to update.
     */
    limit?: number
  }

  /**
   * AttendanceEvent upsert
   */
  export type AttendanceEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AttendanceEvent to update in case it exists.
     */
    where: AttendanceEventWhereUniqueInput
    /**
     * In case the AttendanceEvent found by the `where` argument doesn't exist, create a new AttendanceEvent with this data.
     */
    create: XOR<AttendanceEventCreateInput, AttendanceEventUncheckedCreateInput>
    /**
     * In case the AttendanceEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceEventUpdateInput, AttendanceEventUncheckedUpdateInput>
  }

  /**
   * AttendanceEvent delete
   */
  export type AttendanceEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Filter which AttendanceEvent to delete.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent deleteMany
   */
  export type AttendanceEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceEvents to delete
     */
    where?: AttendanceEventWhereInput
    /**
     * Limit how many AttendanceEvents to delete.
     */
    limit?: number
  }

  /**
   * AttendanceEvent without action
   */
  export type AttendanceEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
  }


  /**
   * Model AttendanceDailySummary
   */

  export type AggregateAttendanceDailySummary = {
    _count: AttendanceDailySummaryCountAggregateOutputType | null
    _avg: AttendanceDailySummaryAvgAggregateOutputType | null
    _sum: AttendanceDailySummarySumAggregateOutputType | null
    _min: AttendanceDailySummaryMinAggregateOutputType | null
    _max: AttendanceDailySummaryMaxAggregateOutputType | null
  }

  export type AttendanceDailySummaryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    overtimeMinutes: number | null
    tempExitCount: number | null
    totalRewardAmount: number | null
  }

  export type AttendanceDailySummarySumAggregateOutputType = {
    id: number | null
    userId: number | null
    overtimeMinutes: number | null
    tempExitCount: number | null
    totalRewardAmount: number | null
  }

  export type AttendanceDailySummaryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    workerName: string | null
    shiftDate: string | null
    shiftDateFa: string | null
    shiftMonthFa: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    lastState: string | null
    earlyArrivalReward: boolean | null
    endOfDayReward: boolean | null
    overtimeMinutes: number | null
    tempExitCount: number | null
    totalRewardAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceDailySummaryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    workerName: string | null
    shiftDate: string | null
    shiftDateFa: string | null
    shiftMonthFa: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    lastState: string | null
    earlyArrivalReward: boolean | null
    endOfDayReward: boolean | null
    overtimeMinutes: number | null
    tempExitCount: number | null
    totalRewardAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceDailySummaryCountAggregateOutputType = {
    id: number
    userId: number
    workerName: number
    shiftDate: number
    shiftDateFa: number
    shiftMonthFa: number
    checkInAt: number
    checkOutAt: number
    lastState: number
    earlyArrivalReward: number
    endOfDayReward: number
    overtimeMinutes: number
    tempExitCount: number
    totalRewardAmount: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceDailySummaryAvgAggregateInputType = {
    id?: true
    userId?: true
    overtimeMinutes?: true
    tempExitCount?: true
    totalRewardAmount?: true
  }

  export type AttendanceDailySummarySumAggregateInputType = {
    id?: true
    userId?: true
    overtimeMinutes?: true
    tempExitCount?: true
    totalRewardAmount?: true
  }

  export type AttendanceDailySummaryMinAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    shiftDate?: true
    shiftDateFa?: true
    shiftMonthFa?: true
    checkInAt?: true
    checkOutAt?: true
    lastState?: true
    earlyArrivalReward?: true
    endOfDayReward?: true
    overtimeMinutes?: true
    tempExitCount?: true
    totalRewardAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceDailySummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    shiftDate?: true
    shiftDateFa?: true
    shiftMonthFa?: true
    checkInAt?: true
    checkOutAt?: true
    lastState?: true
    earlyArrivalReward?: true
    endOfDayReward?: true
    overtimeMinutes?: true
    tempExitCount?: true
    totalRewardAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceDailySummaryCountAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    shiftDate?: true
    shiftDateFa?: true
    shiftMonthFa?: true
    checkInAt?: true
    checkOutAt?: true
    lastState?: true
    earlyArrivalReward?: true
    endOfDayReward?: true
    overtimeMinutes?: true
    tempExitCount?: true
    totalRewardAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceDailySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceDailySummary to aggregate.
     */
    where?: AttendanceDailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDailySummaries to fetch.
     */
    orderBy?: AttendanceDailySummaryOrderByWithRelationInput | AttendanceDailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceDailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceDailySummaries
    **/
    _count?: true | AttendanceDailySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceDailySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceDailySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceDailySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceDailySummaryMaxAggregateInputType
  }

  export type GetAttendanceDailySummaryAggregateType<T extends AttendanceDailySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceDailySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceDailySummary[P]>
      : GetScalarType<T[P], AggregateAttendanceDailySummary[P]>
  }




  export type AttendanceDailySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceDailySummaryWhereInput
    orderBy?: AttendanceDailySummaryOrderByWithAggregationInput | AttendanceDailySummaryOrderByWithAggregationInput[]
    by: AttendanceDailySummaryScalarFieldEnum[] | AttendanceDailySummaryScalarFieldEnum
    having?: AttendanceDailySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceDailySummaryCountAggregateInputType | true
    _avg?: AttendanceDailySummaryAvgAggregateInputType
    _sum?: AttendanceDailySummarySumAggregateInputType
    _min?: AttendanceDailySummaryMinAggregateInputType
    _max?: AttendanceDailySummaryMaxAggregateInputType
  }

  export type AttendanceDailySummaryGroupByOutputType = {
    id: number
    userId: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    shiftMonthFa: string
    checkInAt: Date | null
    checkOutAt: Date | null
    lastState: string
    earlyArrivalReward: boolean
    endOfDayReward: boolean
    overtimeMinutes: number
    tempExitCount: number
    totalRewardAmount: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceDailySummaryCountAggregateOutputType | null
    _avg: AttendanceDailySummaryAvgAggregateOutputType | null
    _sum: AttendanceDailySummarySumAggregateOutputType | null
    _min: AttendanceDailySummaryMinAggregateOutputType | null
    _max: AttendanceDailySummaryMaxAggregateOutputType | null
  }

  type GetAttendanceDailySummaryGroupByPayload<T extends AttendanceDailySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceDailySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceDailySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceDailySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceDailySummaryGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceDailySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workerName?: boolean
    shiftDate?: boolean
    shiftDateFa?: boolean
    shiftMonthFa?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    lastState?: boolean
    earlyArrivalReward?: boolean
    endOfDayReward?: boolean
    overtimeMinutes?: boolean
    tempExitCount?: boolean
    totalRewardAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendanceDailySummary"]>



  export type AttendanceDailySummarySelectScalar = {
    id?: boolean
    userId?: boolean
    workerName?: boolean
    shiftDate?: boolean
    shiftDateFa?: boolean
    shiftMonthFa?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    lastState?: boolean
    earlyArrivalReward?: boolean
    endOfDayReward?: boolean
    overtimeMinutes?: boolean
    tempExitCount?: boolean
    totalRewardAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceDailySummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workerName" | "shiftDate" | "shiftDateFa" | "shiftMonthFa" | "checkInAt" | "checkOutAt" | "lastState" | "earlyArrivalReward" | "endOfDayReward" | "overtimeMinutes" | "tempExitCount" | "totalRewardAmount" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceDailySummary"]>

  export type $AttendanceDailySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceDailySummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      workerName: string
      shiftDate: string
      shiftDateFa: string
      shiftMonthFa: string
      checkInAt: Date | null
      checkOutAt: Date | null
      lastState: string
      earlyArrivalReward: boolean
      endOfDayReward: boolean
      overtimeMinutes: number
      tempExitCount: number
      totalRewardAmount: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendanceDailySummary"]>
    composites: {}
  }

  type AttendanceDailySummaryGetPayload<S extends boolean | null | undefined | AttendanceDailySummaryDefaultArgs> = $Result.GetResult<Prisma.$AttendanceDailySummaryPayload, S>

  type AttendanceDailySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceDailySummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceDailySummaryCountAggregateInputType | true
    }

  export interface AttendanceDailySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceDailySummary'], meta: { name: 'AttendanceDailySummary' } }
    /**
     * Find zero or one AttendanceDailySummary that matches the filter.
     * @param {AttendanceDailySummaryFindUniqueArgs} args - Arguments to find a AttendanceDailySummary
     * @example
     * // Get one AttendanceDailySummary
     * const attendanceDailySummary = await prisma.attendanceDailySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceDailySummaryFindUniqueArgs>(args: SelectSubset<T, AttendanceDailySummaryFindUniqueArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceDailySummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceDailySummaryFindUniqueOrThrowArgs} args - Arguments to find a AttendanceDailySummary
     * @example
     * // Get one AttendanceDailySummary
     * const attendanceDailySummary = await prisma.attendanceDailySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceDailySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceDailySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceDailySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryFindFirstArgs} args - Arguments to find a AttendanceDailySummary
     * @example
     * // Get one AttendanceDailySummary
     * const attendanceDailySummary = await prisma.attendanceDailySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceDailySummaryFindFirstArgs>(args?: SelectSubset<T, AttendanceDailySummaryFindFirstArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceDailySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryFindFirstOrThrowArgs} args - Arguments to find a AttendanceDailySummary
     * @example
     * // Get one AttendanceDailySummary
     * const attendanceDailySummary = await prisma.attendanceDailySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceDailySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceDailySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceDailySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceDailySummaries
     * const attendanceDailySummaries = await prisma.attendanceDailySummary.findMany()
     * 
     * // Get first 10 AttendanceDailySummaries
     * const attendanceDailySummaries = await prisma.attendanceDailySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceDailySummaryWithIdOnly = await prisma.attendanceDailySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceDailySummaryFindManyArgs>(args?: SelectSubset<T, AttendanceDailySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceDailySummary.
     * @param {AttendanceDailySummaryCreateArgs} args - Arguments to create a AttendanceDailySummary.
     * @example
     * // Create one AttendanceDailySummary
     * const AttendanceDailySummary = await prisma.attendanceDailySummary.create({
     *   data: {
     *     // ... data to create a AttendanceDailySummary
     *   }
     * })
     * 
     */
    create<T extends AttendanceDailySummaryCreateArgs>(args: SelectSubset<T, AttendanceDailySummaryCreateArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceDailySummaries.
     * @param {AttendanceDailySummaryCreateManyArgs} args - Arguments to create many AttendanceDailySummaries.
     * @example
     * // Create many AttendanceDailySummaries
     * const attendanceDailySummary = await prisma.attendanceDailySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceDailySummaryCreateManyArgs>(args?: SelectSubset<T, AttendanceDailySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttendanceDailySummary.
     * @param {AttendanceDailySummaryDeleteArgs} args - Arguments to delete one AttendanceDailySummary.
     * @example
     * // Delete one AttendanceDailySummary
     * const AttendanceDailySummary = await prisma.attendanceDailySummary.delete({
     *   where: {
     *     // ... filter to delete one AttendanceDailySummary
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDailySummaryDeleteArgs>(args: SelectSubset<T, AttendanceDailySummaryDeleteArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceDailySummary.
     * @param {AttendanceDailySummaryUpdateArgs} args - Arguments to update one AttendanceDailySummary.
     * @example
     * // Update one AttendanceDailySummary
     * const attendanceDailySummary = await prisma.attendanceDailySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceDailySummaryUpdateArgs>(args: SelectSubset<T, AttendanceDailySummaryUpdateArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceDailySummaries.
     * @param {AttendanceDailySummaryDeleteManyArgs} args - Arguments to filter AttendanceDailySummaries to delete.
     * @example
     * // Delete a few AttendanceDailySummaries
     * const { count } = await prisma.attendanceDailySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDailySummaryDeleteManyArgs>(args?: SelectSubset<T, AttendanceDailySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceDailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceDailySummaries
     * const attendanceDailySummary = await prisma.attendanceDailySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceDailySummaryUpdateManyArgs>(args: SelectSubset<T, AttendanceDailySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttendanceDailySummary.
     * @param {AttendanceDailySummaryUpsertArgs} args - Arguments to update or create a AttendanceDailySummary.
     * @example
     * // Update or create a AttendanceDailySummary
     * const attendanceDailySummary = await prisma.attendanceDailySummary.upsert({
     *   create: {
     *     // ... data to create a AttendanceDailySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceDailySummary we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceDailySummaryUpsertArgs>(args: SelectSubset<T, AttendanceDailySummaryUpsertArgs<ExtArgs>>): Prisma__AttendanceDailySummaryClient<$Result.GetResult<Prisma.$AttendanceDailySummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceDailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryCountArgs} args - Arguments to filter AttendanceDailySummaries to count.
     * @example
     * // Count the number of AttendanceDailySummaries
     * const count = await prisma.attendanceDailySummary.count({
     *   where: {
     *     // ... the filter for the AttendanceDailySummaries we want to count
     *   }
     * })
    **/
    count<T extends AttendanceDailySummaryCountArgs>(
      args?: Subset<T, AttendanceDailySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceDailySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceDailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceDailySummaryAggregateArgs>(args: Subset<T, AttendanceDailySummaryAggregateArgs>): Prisma.PrismaPromise<GetAttendanceDailySummaryAggregateType<T>>

    /**
     * Group by AttendanceDailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDailySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceDailySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceDailySummaryGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceDailySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceDailySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceDailySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceDailySummary model
   */
  readonly fields: AttendanceDailySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceDailySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceDailySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceDailySummary model
   */
  interface AttendanceDailySummaryFieldRefs {
    readonly id: FieldRef<"AttendanceDailySummary", 'Int'>
    readonly userId: FieldRef<"AttendanceDailySummary", 'Int'>
    readonly workerName: FieldRef<"AttendanceDailySummary", 'String'>
    readonly shiftDate: FieldRef<"AttendanceDailySummary", 'String'>
    readonly shiftDateFa: FieldRef<"AttendanceDailySummary", 'String'>
    readonly shiftMonthFa: FieldRef<"AttendanceDailySummary", 'String'>
    readonly checkInAt: FieldRef<"AttendanceDailySummary", 'DateTime'>
    readonly checkOutAt: FieldRef<"AttendanceDailySummary", 'DateTime'>
    readonly lastState: FieldRef<"AttendanceDailySummary", 'String'>
    readonly earlyArrivalReward: FieldRef<"AttendanceDailySummary", 'Boolean'>
    readonly endOfDayReward: FieldRef<"AttendanceDailySummary", 'Boolean'>
    readonly overtimeMinutes: FieldRef<"AttendanceDailySummary", 'Int'>
    readonly tempExitCount: FieldRef<"AttendanceDailySummary", 'Int'>
    readonly totalRewardAmount: FieldRef<"AttendanceDailySummary", 'Int'>
    readonly notes: FieldRef<"AttendanceDailySummary", 'String'>
    readonly createdAt: FieldRef<"AttendanceDailySummary", 'DateTime'>
    readonly updatedAt: FieldRef<"AttendanceDailySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceDailySummary findUnique
   */
  export type AttendanceDailySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceDailySummary to fetch.
     */
    where: AttendanceDailySummaryWhereUniqueInput
  }

  /**
   * AttendanceDailySummary findUniqueOrThrow
   */
  export type AttendanceDailySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceDailySummary to fetch.
     */
    where: AttendanceDailySummaryWhereUniqueInput
  }

  /**
   * AttendanceDailySummary findFirst
   */
  export type AttendanceDailySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceDailySummary to fetch.
     */
    where?: AttendanceDailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDailySummaries to fetch.
     */
    orderBy?: AttendanceDailySummaryOrderByWithRelationInput | AttendanceDailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceDailySummaries.
     */
    cursor?: AttendanceDailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceDailySummaries.
     */
    distinct?: AttendanceDailySummaryScalarFieldEnum | AttendanceDailySummaryScalarFieldEnum[]
  }

  /**
   * AttendanceDailySummary findFirstOrThrow
   */
  export type AttendanceDailySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceDailySummary to fetch.
     */
    where?: AttendanceDailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDailySummaries to fetch.
     */
    orderBy?: AttendanceDailySummaryOrderByWithRelationInput | AttendanceDailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceDailySummaries.
     */
    cursor?: AttendanceDailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceDailySummaries.
     */
    distinct?: AttendanceDailySummaryScalarFieldEnum | AttendanceDailySummaryScalarFieldEnum[]
  }

  /**
   * AttendanceDailySummary findMany
   */
  export type AttendanceDailySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceDailySummaries to fetch.
     */
    where?: AttendanceDailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDailySummaries to fetch.
     */
    orderBy?: AttendanceDailySummaryOrderByWithRelationInput | AttendanceDailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceDailySummaries.
     */
    cursor?: AttendanceDailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDailySummaries.
     */
    skip?: number
    distinct?: AttendanceDailySummaryScalarFieldEnum | AttendanceDailySummaryScalarFieldEnum[]
  }

  /**
   * AttendanceDailySummary create
   */
  export type AttendanceDailySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * The data needed to create a AttendanceDailySummary.
     */
    data: XOR<AttendanceDailySummaryCreateInput, AttendanceDailySummaryUncheckedCreateInput>
  }

  /**
   * AttendanceDailySummary createMany
   */
  export type AttendanceDailySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceDailySummaries.
     */
    data: AttendanceDailySummaryCreateManyInput | AttendanceDailySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceDailySummary update
   */
  export type AttendanceDailySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * The data needed to update a AttendanceDailySummary.
     */
    data: XOR<AttendanceDailySummaryUpdateInput, AttendanceDailySummaryUncheckedUpdateInput>
    /**
     * Choose, which AttendanceDailySummary to update.
     */
    where: AttendanceDailySummaryWhereUniqueInput
  }

  /**
   * AttendanceDailySummary updateMany
   */
  export type AttendanceDailySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceDailySummaries.
     */
    data: XOR<AttendanceDailySummaryUpdateManyMutationInput, AttendanceDailySummaryUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceDailySummaries to update
     */
    where?: AttendanceDailySummaryWhereInput
    /**
     * Limit how many AttendanceDailySummaries to update.
     */
    limit?: number
  }

  /**
   * AttendanceDailySummary upsert
   */
  export type AttendanceDailySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * The filter to search for the AttendanceDailySummary to update in case it exists.
     */
    where: AttendanceDailySummaryWhereUniqueInput
    /**
     * In case the AttendanceDailySummary found by the `where` argument doesn't exist, create a new AttendanceDailySummary with this data.
     */
    create: XOR<AttendanceDailySummaryCreateInput, AttendanceDailySummaryUncheckedCreateInput>
    /**
     * In case the AttendanceDailySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceDailySummaryUpdateInput, AttendanceDailySummaryUncheckedUpdateInput>
  }

  /**
   * AttendanceDailySummary delete
   */
  export type AttendanceDailySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
    /**
     * Filter which AttendanceDailySummary to delete.
     */
    where: AttendanceDailySummaryWhereUniqueInput
  }

  /**
   * AttendanceDailySummary deleteMany
   */
  export type AttendanceDailySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceDailySummaries to delete
     */
    where?: AttendanceDailySummaryWhereInput
    /**
     * Limit how many AttendanceDailySummaries to delete.
     */
    limit?: number
  }

  /**
   * AttendanceDailySummary without action
   */
  export type AttendanceDailySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDailySummary
     */
    select?: AttendanceDailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDailySummary
     */
    omit?: AttendanceDailySummaryOmit<ExtArgs> | null
  }


  /**
   * Model RewardLedger
   */

  export type AggregateRewardLedger = {
    _count: RewardLedgerCountAggregateOutputType | null
    _avg: RewardLedgerAvgAggregateOutputType | null
    _sum: RewardLedgerSumAggregateOutputType | null
    _min: RewardLedgerMinAggregateOutputType | null
    _max: RewardLedgerMaxAggregateOutputType | null
  }

  export type RewardLedgerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type RewardLedgerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type RewardLedgerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    workerName: string | null
    shiftDate: string | null
    shiftDateFa: string | null
    type: string | null
    amount: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type RewardLedgerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    workerName: string | null
    shiftDate: string | null
    shiftDateFa: string | null
    type: string | null
    amount: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type RewardLedgerCountAggregateOutputType = {
    id: number
    userId: number
    workerName: number
    shiftDate: number
    shiftDateFa: number
    type: number
    amount: number
    reason: number
    createdAt: number
    _all: number
  }


  export type RewardLedgerAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type RewardLedgerSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type RewardLedgerMinAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    shiftDate?: true
    shiftDateFa?: true
    type?: true
    amount?: true
    reason?: true
    createdAt?: true
  }

  export type RewardLedgerMaxAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    shiftDate?: true
    shiftDateFa?: true
    type?: true
    amount?: true
    reason?: true
    createdAt?: true
  }

  export type RewardLedgerCountAggregateInputType = {
    id?: true
    userId?: true
    workerName?: true
    shiftDate?: true
    shiftDateFa?: true
    type?: true
    amount?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type RewardLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardLedger to aggregate.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardLedgers
    **/
    _count?: true | RewardLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardLedgerMaxAggregateInputType
  }

  export type GetRewardLedgerAggregateType<T extends RewardLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardLedger[P]>
      : GetScalarType<T[P], AggregateRewardLedger[P]>
  }




  export type RewardLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardLedgerWhereInput
    orderBy?: RewardLedgerOrderByWithAggregationInput | RewardLedgerOrderByWithAggregationInput[]
    by: RewardLedgerScalarFieldEnum[] | RewardLedgerScalarFieldEnum
    having?: RewardLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardLedgerCountAggregateInputType | true
    _avg?: RewardLedgerAvgAggregateInputType
    _sum?: RewardLedgerSumAggregateInputType
    _min?: RewardLedgerMinAggregateInputType
    _max?: RewardLedgerMaxAggregateInputType
  }

  export type RewardLedgerGroupByOutputType = {
    id: number
    userId: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    type: string
    amount: number
    reason: string
    createdAt: Date
    _count: RewardLedgerCountAggregateOutputType | null
    _avg: RewardLedgerAvgAggregateOutputType | null
    _sum: RewardLedgerSumAggregateOutputType | null
    _min: RewardLedgerMinAggregateOutputType | null
    _max: RewardLedgerMaxAggregateOutputType | null
  }

  type GetRewardLedgerGroupByPayload<T extends RewardLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], RewardLedgerGroupByOutputType[P]>
        }
      >
    >


  export type RewardLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workerName?: boolean
    shiftDate?: boolean
    shiftDateFa?: boolean
    type?: boolean
    amount?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rewardLedger"]>



  export type RewardLedgerSelectScalar = {
    id?: boolean
    userId?: boolean
    workerName?: boolean
    shiftDate?: boolean
    shiftDateFa?: boolean
    type?: boolean
    amount?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type RewardLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workerName" | "shiftDate" | "shiftDateFa" | "type" | "amount" | "reason" | "createdAt", ExtArgs["result"]["rewardLedger"]>

  export type $RewardLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardLedger"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      workerName: string
      shiftDate: string
      shiftDateFa: string
      type: string
      amount: number
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["rewardLedger"]>
    composites: {}
  }

  type RewardLedgerGetPayload<S extends boolean | null | undefined | RewardLedgerDefaultArgs> = $Result.GetResult<Prisma.$RewardLedgerPayload, S>

  type RewardLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardLedgerCountAggregateInputType | true
    }

  export interface RewardLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardLedger'], meta: { name: 'RewardLedger' } }
    /**
     * Find zero or one RewardLedger that matches the filter.
     * @param {RewardLedgerFindUniqueArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardLedgerFindUniqueArgs>(args: SelectSubset<T, RewardLedgerFindUniqueArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardLedgerFindUniqueOrThrowArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerFindFirstArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardLedgerFindFirstArgs>(args?: SelectSubset<T, RewardLedgerFindFirstArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerFindFirstOrThrowArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardLedgers
     * const rewardLedgers = await prisma.rewardLedger.findMany()
     * 
     * // Get first 10 RewardLedgers
     * const rewardLedgers = await prisma.rewardLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardLedgerWithIdOnly = await prisma.rewardLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardLedgerFindManyArgs>(args?: SelectSubset<T, RewardLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardLedger.
     * @param {RewardLedgerCreateArgs} args - Arguments to create a RewardLedger.
     * @example
     * // Create one RewardLedger
     * const RewardLedger = await prisma.rewardLedger.create({
     *   data: {
     *     // ... data to create a RewardLedger
     *   }
     * })
     * 
     */
    create<T extends RewardLedgerCreateArgs>(args: SelectSubset<T, RewardLedgerCreateArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardLedgers.
     * @param {RewardLedgerCreateManyArgs} args - Arguments to create many RewardLedgers.
     * @example
     * // Create many RewardLedgers
     * const rewardLedger = await prisma.rewardLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardLedgerCreateManyArgs>(args?: SelectSubset<T, RewardLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RewardLedger.
     * @param {RewardLedgerDeleteArgs} args - Arguments to delete one RewardLedger.
     * @example
     * // Delete one RewardLedger
     * const RewardLedger = await prisma.rewardLedger.delete({
     *   where: {
     *     // ... filter to delete one RewardLedger
     *   }
     * })
     * 
     */
    delete<T extends RewardLedgerDeleteArgs>(args: SelectSubset<T, RewardLedgerDeleteArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardLedger.
     * @param {RewardLedgerUpdateArgs} args - Arguments to update one RewardLedger.
     * @example
     * // Update one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardLedgerUpdateArgs>(args: SelectSubset<T, RewardLedgerUpdateArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardLedgers.
     * @param {RewardLedgerDeleteManyArgs} args - Arguments to filter RewardLedgers to delete.
     * @example
     * // Delete a few RewardLedgers
     * const { count } = await prisma.rewardLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardLedgerDeleteManyArgs>(args?: SelectSubset<T, RewardLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardLedgers
     * const rewardLedger = await prisma.rewardLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardLedgerUpdateManyArgs>(args: SelectSubset<T, RewardLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RewardLedger.
     * @param {RewardLedgerUpsertArgs} args - Arguments to update or create a RewardLedger.
     * @example
     * // Update or create a RewardLedger
     * const rewardLedger = await prisma.rewardLedger.upsert({
     *   create: {
     *     // ... data to create a RewardLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardLedger we want to update
     *   }
     * })
     */
    upsert<T extends RewardLedgerUpsertArgs>(args: SelectSubset<T, RewardLedgerUpsertArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerCountArgs} args - Arguments to filter RewardLedgers to count.
     * @example
     * // Count the number of RewardLedgers
     * const count = await prisma.rewardLedger.count({
     *   where: {
     *     // ... the filter for the RewardLedgers we want to count
     *   }
     * })
    **/
    count<T extends RewardLedgerCountArgs>(
      args?: Subset<T, RewardLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardLedgerAggregateArgs>(args: Subset<T, RewardLedgerAggregateArgs>): Prisma.PrismaPromise<GetRewardLedgerAggregateType<T>>

    /**
     * Group by RewardLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardLedgerGroupByArgs['orderBy'] }
        : { orderBy?: RewardLedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardLedger model
   */
  readonly fields: RewardLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RewardLedger model
   */
  interface RewardLedgerFieldRefs {
    readonly id: FieldRef<"RewardLedger", 'Int'>
    readonly userId: FieldRef<"RewardLedger", 'Int'>
    readonly workerName: FieldRef<"RewardLedger", 'String'>
    readonly shiftDate: FieldRef<"RewardLedger", 'String'>
    readonly shiftDateFa: FieldRef<"RewardLedger", 'String'>
    readonly type: FieldRef<"RewardLedger", 'String'>
    readonly amount: FieldRef<"RewardLedger", 'Int'>
    readonly reason: FieldRef<"RewardLedger", 'String'>
    readonly createdAt: FieldRef<"RewardLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardLedger findUnique
   */
  export type RewardLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger findUniqueOrThrow
   */
  export type RewardLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger findFirst
   */
  export type RewardLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardLedgers.
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardLedgers.
     */
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * RewardLedger findFirstOrThrow
   */
  export type RewardLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardLedgers.
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardLedgers.
     */
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * RewardLedger findMany
   */
  export type RewardLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Filter, which RewardLedgers to fetch.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardLedgers.
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * RewardLedger create
   */
  export type RewardLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * The data needed to create a RewardLedger.
     */
    data: XOR<RewardLedgerCreateInput, RewardLedgerUncheckedCreateInput>
  }

  /**
   * RewardLedger createMany
   */
  export type RewardLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardLedgers.
     */
    data: RewardLedgerCreateManyInput | RewardLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardLedger update
   */
  export type RewardLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * The data needed to update a RewardLedger.
     */
    data: XOR<RewardLedgerUpdateInput, RewardLedgerUncheckedUpdateInput>
    /**
     * Choose, which RewardLedger to update.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger updateMany
   */
  export type RewardLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardLedgers.
     */
    data: XOR<RewardLedgerUpdateManyMutationInput, RewardLedgerUncheckedUpdateManyInput>
    /**
     * Filter which RewardLedgers to update
     */
    where?: RewardLedgerWhereInput
    /**
     * Limit how many RewardLedgers to update.
     */
    limit?: number
  }

  /**
   * RewardLedger upsert
   */
  export type RewardLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * The filter to search for the RewardLedger to update in case it exists.
     */
    where: RewardLedgerWhereUniqueInput
    /**
     * In case the RewardLedger found by the `where` argument doesn't exist, create a new RewardLedger with this data.
     */
    create: XOR<RewardLedgerCreateInput, RewardLedgerUncheckedCreateInput>
    /**
     * In case the RewardLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardLedgerUpdateInput, RewardLedgerUncheckedUpdateInput>
  }

  /**
   * RewardLedger delete
   */
  export type RewardLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Filter which RewardLedger to delete.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger deleteMany
   */
  export type RewardLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardLedgers to delete
     */
    where?: RewardLedgerWhereInput
    /**
     * Limit how many RewardLedgers to delete.
     */
    limit?: number
  }

  /**
   * RewardLedger without action
   */
  export type RewardLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
  }


  /**
   * Model WorkTask
   */

  export type AggregateWorkTask = {
    _count: WorkTaskCountAggregateOutputType | null
    _avg: WorkTaskAvgAggregateOutputType | null
    _sum: WorkTaskSumAggregateOutputType | null
    _min: WorkTaskMinAggregateOutputType | null
    _max: WorkTaskMaxAggregateOutputType | null
  }

  export type WorkTaskAvgAggregateOutputType = {
    sequence: number | null
    pickedByUserId: number | null
    estimatedDays: number | null
  }

  export type WorkTaskSumAggregateOutputType = {
    sequence: number | null
    pickedByUserId: number | null
    estimatedDays: number | null
  }

  export type WorkTaskMinAggregateOutputType = {
    id: string | null
    rollerId: string | null
    sequence: number | null
    stage: string | null
    status: $Enums.TaskStatus | null
    worker: string | null
    pickedByUserId: number | null
    availableAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    blockedAt: Date | null
    blockedReason: string | null
    estimatedDays: number | null
    dueAt: Date | null
    completedEarly: boolean | null
    delayed: boolean | null
    delayNotified: boolean | null
    delayDetectedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type WorkTaskMaxAggregateOutputType = {
    id: string | null
    rollerId: string | null
    sequence: number | null
    stage: string | null
    status: $Enums.TaskStatus | null
    worker: string | null
    pickedByUserId: number | null
    availableAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    blockedAt: Date | null
    blockedReason: string | null
    estimatedDays: number | null
    dueAt: Date | null
    completedEarly: boolean | null
    delayed: boolean | null
    delayNotified: boolean | null
    delayDetectedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type WorkTaskCountAggregateOutputType = {
    id: number
    rollerId: number
    sequence: number
    stage: number
    status: number
    worker: number
    pickedByUserId: number
    availableAt: number
    startedAt: number
    finishedAt: number
    blockedAt: number
    blockedReason: number
    estimatedDays: number
    dueAt: number
    completedEarly: number
    delayed: number
    delayNotified: number
    delayDetectedAt: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type WorkTaskAvgAggregateInputType = {
    sequence?: true
    pickedByUserId?: true
    estimatedDays?: true
  }

  export type WorkTaskSumAggregateInputType = {
    sequence?: true
    pickedByUserId?: true
    estimatedDays?: true
  }

  export type WorkTaskMinAggregateInputType = {
    id?: true
    rollerId?: true
    sequence?: true
    stage?: true
    status?: true
    worker?: true
    pickedByUserId?: true
    availableAt?: true
    startedAt?: true
    finishedAt?: true
    blockedAt?: true
    blockedReason?: true
    estimatedDays?: true
    dueAt?: true
    completedEarly?: true
    delayed?: true
    delayNotified?: true
    delayDetectedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type WorkTaskMaxAggregateInputType = {
    id?: true
    rollerId?: true
    sequence?: true
    stage?: true
    status?: true
    worker?: true
    pickedByUserId?: true
    availableAt?: true
    startedAt?: true
    finishedAt?: true
    blockedAt?: true
    blockedReason?: true
    estimatedDays?: true
    dueAt?: true
    completedEarly?: true
    delayed?: true
    delayNotified?: true
    delayDetectedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type WorkTaskCountAggregateInputType = {
    id?: true
    rollerId?: true
    sequence?: true
    stage?: true
    status?: true
    worker?: true
    pickedByUserId?: true
    availableAt?: true
    startedAt?: true
    finishedAt?: true
    blockedAt?: true
    blockedReason?: true
    estimatedDays?: true
    dueAt?: true
    completedEarly?: true
    delayed?: true
    delayNotified?: true
    delayDetectedAt?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WorkTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTask to aggregate.
     */
    where?: WorkTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTaskOrderByWithRelationInput | WorkTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkTasks
    **/
    _count?: true | WorkTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkTaskMaxAggregateInputType
  }

  export type GetWorkTaskAggregateType<T extends WorkTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkTask[P]>
      : GetScalarType<T[P], AggregateWorkTask[P]>
  }




  export type WorkTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTaskWhereInput
    orderBy?: WorkTaskOrderByWithAggregationInput | WorkTaskOrderByWithAggregationInput[]
    by: WorkTaskScalarFieldEnum[] | WorkTaskScalarFieldEnum
    having?: WorkTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkTaskCountAggregateInputType | true
    _avg?: WorkTaskAvgAggregateInputType
    _sum?: WorkTaskSumAggregateInputType
    _min?: WorkTaskMinAggregateInputType
    _max?: WorkTaskMaxAggregateInputType
  }

  export type WorkTaskGroupByOutputType = {
    id: string
    rollerId: string
    sequence: number
    stage: string
    status: $Enums.TaskStatus
    worker: string | null
    pickedByUserId: number | null
    availableAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    blockedAt: Date | null
    blockedReason: string | null
    estimatedDays: number
    dueAt: Date | null
    completedEarly: boolean
    delayed: boolean
    delayNotified: boolean
    delayDetectedAt: Date | null
    updatedAt: Date
    createdAt: Date
    _count: WorkTaskCountAggregateOutputType | null
    _avg: WorkTaskAvgAggregateOutputType | null
    _sum: WorkTaskSumAggregateOutputType | null
    _min: WorkTaskMinAggregateOutputType | null
    _max: WorkTaskMaxAggregateOutputType | null
  }

  type GetWorkTaskGroupByPayload<T extends WorkTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkTaskGroupByOutputType[P]>
            : GetScalarType<T[P], WorkTaskGroupByOutputType[P]>
        }
      >
    >


  export type WorkTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rollerId?: boolean
    sequence?: boolean
    stage?: boolean
    status?: boolean
    worker?: boolean
    pickedByUserId?: boolean
    availableAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    blockedAt?: boolean
    blockedReason?: boolean
    estimatedDays?: boolean
    dueAt?: boolean
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    roller?: boolean | RollerDefaultArgs<ExtArgs>
    pickedByUser?: boolean | WorkTask$pickedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["workTask"]>



  export type WorkTaskSelectScalar = {
    id?: boolean
    rollerId?: boolean
    sequence?: boolean
    stage?: boolean
    status?: boolean
    worker?: boolean
    pickedByUserId?: boolean
    availableAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    blockedAt?: boolean
    blockedReason?: boolean
    estimatedDays?: boolean
    dueAt?: boolean
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type WorkTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rollerId" | "sequence" | "stage" | "status" | "worker" | "pickedByUserId" | "availableAt" | "startedAt" | "finishedAt" | "blockedAt" | "blockedReason" | "estimatedDays" | "dueAt" | "completedEarly" | "delayed" | "delayNotified" | "delayDetectedAt" | "updatedAt" | "createdAt", ExtArgs["result"]["workTask"]>
  export type WorkTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roller?: boolean | RollerDefaultArgs<ExtArgs>
    pickedByUser?: boolean | WorkTask$pickedByUserArgs<ExtArgs>
  }

  export type $WorkTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkTask"
    objects: {
      roller: Prisma.$RollerPayload<ExtArgs>
      pickedByUser: Prisma.$AppUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rollerId: string
      sequence: number
      stage: string
      status: $Enums.TaskStatus
      worker: string | null
      pickedByUserId: number | null
      availableAt: Date | null
      startedAt: Date | null
      finishedAt: Date | null
      blockedAt: Date | null
      blockedReason: string | null
      estimatedDays: number
      dueAt: Date | null
      completedEarly: boolean
      delayed: boolean
      delayNotified: boolean
      delayDetectedAt: Date | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["workTask"]>
    composites: {}
  }

  type WorkTaskGetPayload<S extends boolean | null | undefined | WorkTaskDefaultArgs> = $Result.GetResult<Prisma.$WorkTaskPayload, S>

  type WorkTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkTaskCountAggregateInputType | true
    }

  export interface WorkTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkTask'], meta: { name: 'WorkTask' } }
    /**
     * Find zero or one WorkTask that matches the filter.
     * @param {WorkTaskFindUniqueArgs} args - Arguments to find a WorkTask
     * @example
     * // Get one WorkTask
     * const workTask = await prisma.workTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkTaskFindUniqueArgs>(args: SelectSubset<T, WorkTaskFindUniqueArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkTaskFindUniqueOrThrowArgs} args - Arguments to find a WorkTask
     * @example
     * // Get one WorkTask
     * const workTask = await prisma.workTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskFindFirstArgs} args - Arguments to find a WorkTask
     * @example
     * // Get one WorkTask
     * const workTask = await prisma.workTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkTaskFindFirstArgs>(args?: SelectSubset<T, WorkTaskFindFirstArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskFindFirstOrThrowArgs} args - Arguments to find a WorkTask
     * @example
     * // Get one WorkTask
     * const workTask = await prisma.workTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkTasks
     * const workTasks = await prisma.workTask.findMany()
     * 
     * // Get first 10 WorkTasks
     * const workTasks = await prisma.workTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workTaskWithIdOnly = await prisma.workTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkTaskFindManyArgs>(args?: SelectSubset<T, WorkTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkTask.
     * @param {WorkTaskCreateArgs} args - Arguments to create a WorkTask.
     * @example
     * // Create one WorkTask
     * const WorkTask = await prisma.workTask.create({
     *   data: {
     *     // ... data to create a WorkTask
     *   }
     * })
     * 
     */
    create<T extends WorkTaskCreateArgs>(args: SelectSubset<T, WorkTaskCreateArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkTasks.
     * @param {WorkTaskCreateManyArgs} args - Arguments to create many WorkTasks.
     * @example
     * // Create many WorkTasks
     * const workTask = await prisma.workTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkTaskCreateManyArgs>(args?: SelectSubset<T, WorkTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkTask.
     * @param {WorkTaskDeleteArgs} args - Arguments to delete one WorkTask.
     * @example
     * // Delete one WorkTask
     * const WorkTask = await prisma.workTask.delete({
     *   where: {
     *     // ... filter to delete one WorkTask
     *   }
     * })
     * 
     */
    delete<T extends WorkTaskDeleteArgs>(args: SelectSubset<T, WorkTaskDeleteArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkTask.
     * @param {WorkTaskUpdateArgs} args - Arguments to update one WorkTask.
     * @example
     * // Update one WorkTask
     * const workTask = await prisma.workTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkTaskUpdateArgs>(args: SelectSubset<T, WorkTaskUpdateArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkTasks.
     * @param {WorkTaskDeleteManyArgs} args - Arguments to filter WorkTasks to delete.
     * @example
     * // Delete a few WorkTasks
     * const { count } = await prisma.workTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkTaskDeleteManyArgs>(args?: SelectSubset<T, WorkTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkTasks
     * const workTask = await prisma.workTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkTaskUpdateManyArgs>(args: SelectSubset<T, WorkTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkTask.
     * @param {WorkTaskUpsertArgs} args - Arguments to update or create a WorkTask.
     * @example
     * // Update or create a WorkTask
     * const workTask = await prisma.workTask.upsert({
     *   create: {
     *     // ... data to create a WorkTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkTask we want to update
     *   }
     * })
     */
    upsert<T extends WorkTaskUpsertArgs>(args: SelectSubset<T, WorkTaskUpsertArgs<ExtArgs>>): Prisma__WorkTaskClient<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskCountArgs} args - Arguments to filter WorkTasks to count.
     * @example
     * // Count the number of WorkTasks
     * const count = await prisma.workTask.count({
     *   where: {
     *     // ... the filter for the WorkTasks we want to count
     *   }
     * })
    **/
    count<T extends WorkTaskCountArgs>(
      args?: Subset<T, WorkTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkTaskAggregateArgs>(args: Subset<T, WorkTaskAggregateArgs>): Prisma.PrismaPromise<GetWorkTaskAggregateType<T>>

    /**
     * Group by WorkTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkTaskGroupByArgs['orderBy'] }
        : { orderBy?: WorkTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkTask model
   */
  readonly fields: WorkTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roller<T extends RollerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RollerDefaultArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pickedByUser<T extends WorkTask$pickedByUserArgs<ExtArgs> = {}>(args?: Subset<T, WorkTask$pickedByUserArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkTask model
   */
  interface WorkTaskFieldRefs {
    readonly id: FieldRef<"WorkTask", 'String'>
    readonly rollerId: FieldRef<"WorkTask", 'String'>
    readonly sequence: FieldRef<"WorkTask", 'Int'>
    readonly stage: FieldRef<"WorkTask", 'String'>
    readonly status: FieldRef<"WorkTask", 'TaskStatus'>
    readonly worker: FieldRef<"WorkTask", 'String'>
    readonly pickedByUserId: FieldRef<"WorkTask", 'Int'>
    readonly availableAt: FieldRef<"WorkTask", 'DateTime'>
    readonly startedAt: FieldRef<"WorkTask", 'DateTime'>
    readonly finishedAt: FieldRef<"WorkTask", 'DateTime'>
    readonly blockedAt: FieldRef<"WorkTask", 'DateTime'>
    readonly blockedReason: FieldRef<"WorkTask", 'String'>
    readonly estimatedDays: FieldRef<"WorkTask", 'Int'>
    readonly dueAt: FieldRef<"WorkTask", 'DateTime'>
    readonly completedEarly: FieldRef<"WorkTask", 'Boolean'>
    readonly delayed: FieldRef<"WorkTask", 'Boolean'>
    readonly delayNotified: FieldRef<"WorkTask", 'Boolean'>
    readonly delayDetectedAt: FieldRef<"WorkTask", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkTask", 'DateTime'>
    readonly createdAt: FieldRef<"WorkTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkTask findUnique
   */
  export type WorkTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkTask to fetch.
     */
    where: WorkTaskWhereUniqueInput
  }

  /**
   * WorkTask findUniqueOrThrow
   */
  export type WorkTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkTask to fetch.
     */
    where: WorkTaskWhereUniqueInput
  }

  /**
   * WorkTask findFirst
   */
  export type WorkTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkTask to fetch.
     */
    where?: WorkTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTaskOrderByWithRelationInput | WorkTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTasks.
     */
    cursor?: WorkTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTasks.
     */
    distinct?: WorkTaskScalarFieldEnum | WorkTaskScalarFieldEnum[]
  }

  /**
   * WorkTask findFirstOrThrow
   */
  export type WorkTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkTask to fetch.
     */
    where?: WorkTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTaskOrderByWithRelationInput | WorkTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTasks.
     */
    cursor?: WorkTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTasks.
     */
    distinct?: WorkTaskScalarFieldEnum | WorkTaskScalarFieldEnum[]
  }

  /**
   * WorkTask findMany
   */
  export type WorkTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkTasks to fetch.
     */
    where?: WorkTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTaskOrderByWithRelationInput | WorkTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkTasks.
     */
    cursor?: WorkTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    distinct?: WorkTaskScalarFieldEnum | WorkTaskScalarFieldEnum[]
  }

  /**
   * WorkTask create
   */
  export type WorkTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkTask.
     */
    data: XOR<WorkTaskCreateInput, WorkTaskUncheckedCreateInput>
  }

  /**
   * WorkTask createMany
   */
  export type WorkTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkTasks.
     */
    data: WorkTaskCreateManyInput | WorkTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkTask update
   */
  export type WorkTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkTask.
     */
    data: XOR<WorkTaskUpdateInput, WorkTaskUncheckedUpdateInput>
    /**
     * Choose, which WorkTask to update.
     */
    where: WorkTaskWhereUniqueInput
  }

  /**
   * WorkTask updateMany
   */
  export type WorkTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkTasks.
     */
    data: XOR<WorkTaskUpdateManyMutationInput, WorkTaskUncheckedUpdateManyInput>
    /**
     * Filter which WorkTasks to update
     */
    where?: WorkTaskWhereInput
    /**
     * Limit how many WorkTasks to update.
     */
    limit?: number
  }

  /**
   * WorkTask upsert
   */
  export type WorkTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkTask to update in case it exists.
     */
    where: WorkTaskWhereUniqueInput
    /**
     * In case the WorkTask found by the `where` argument doesn't exist, create a new WorkTask with this data.
     */
    create: XOR<WorkTaskCreateInput, WorkTaskUncheckedCreateInput>
    /**
     * In case the WorkTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkTaskUpdateInput, WorkTaskUncheckedUpdateInput>
  }

  /**
   * WorkTask delete
   */
  export type WorkTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    /**
     * Filter which WorkTask to delete.
     */
    where: WorkTaskWhereUniqueInput
  }

  /**
   * WorkTask deleteMany
   */
  export type WorkTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTasks to delete
     */
    where?: WorkTaskWhereInput
    /**
     * Limit how many WorkTasks to delete.
     */
    limit?: number
  }

  /**
   * WorkTask.pickedByUser
   */
  export type WorkTask$pickedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    where?: AppUserWhereInput
  }

  /**
   * WorkTask without action
   */
  export type WorkTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
  }


  /**
   * Model IssueReport
   */

  export type AggregateIssueReport = {
    _count: IssueReportCountAggregateOutputType | null
    _avg: IssueReportAvgAggregateOutputType | null
    _sum: IssueReportSumAggregateOutputType | null
    _min: IssueReportMinAggregateOutputType | null
    _max: IssueReportMaxAggregateOutputType | null
  }

  export type IssueReportAvgAggregateOutputType = {
    id: number | null
  }

  export type IssueReportSumAggregateOutputType = {
    id: number | null
  }

  export type IssueReportMinAggregateOutputType = {
    id: number | null
    rollerId: string | null
    taskId: string | null
    stage: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type IssueReportMaxAggregateOutputType = {
    id: number | null
    rollerId: string | null
    taskId: string | null
    stage: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type IssueReportCountAggregateOutputType = {
    id: number
    rollerId: number
    taskId: number
    stage: number
    description: number
    status: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type IssueReportAvgAggregateInputType = {
    id?: true
  }

  export type IssueReportSumAggregateInputType = {
    id?: true
  }

  export type IssueReportMinAggregateInputType = {
    id?: true
    rollerId?: true
    taskId?: true
    stage?: true
    description?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type IssueReportMaxAggregateInputType = {
    id?: true
    rollerId?: true
    taskId?: true
    stage?: true
    description?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type IssueReportCountAggregateInputType = {
    id?: true
    rollerId?: true
    taskId?: true
    stage?: true
    description?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type IssueReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueReport to aggregate.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssueReports
    **/
    _count?: true | IssueReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueReportMaxAggregateInputType
  }

  export type GetIssueReportAggregateType<T extends IssueReportAggregateArgs> = {
        [P in keyof T & keyof AggregateIssueReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssueReport[P]>
      : GetScalarType<T[P], AggregateIssueReport[P]>
  }




  export type IssueReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueReportWhereInput
    orderBy?: IssueReportOrderByWithAggregationInput | IssueReportOrderByWithAggregationInput[]
    by: IssueReportScalarFieldEnum[] | IssueReportScalarFieldEnum
    having?: IssueReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueReportCountAggregateInputType | true
    _avg?: IssueReportAvgAggregateInputType
    _sum?: IssueReportSumAggregateInputType
    _min?: IssueReportMinAggregateInputType
    _max?: IssueReportMaxAggregateInputType
  }

  export type IssueReportGroupByOutputType = {
    id: number
    rollerId: string
    taskId: string | null
    stage: string
    description: string
    status: string
    createdAt: Date
    resolvedAt: Date | null
    _count: IssueReportCountAggregateOutputType | null
    _avg: IssueReportAvgAggregateOutputType | null
    _sum: IssueReportSumAggregateOutputType | null
    _min: IssueReportMinAggregateOutputType | null
    _max: IssueReportMaxAggregateOutputType | null
  }

  type GetIssueReportGroupByPayload<T extends IssueReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueReportGroupByOutputType[P]>
            : GetScalarType<T[P], IssueReportGroupByOutputType[P]>
        }
      >
    >


  export type IssueReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rollerId?: boolean
    taskId?: boolean
    stage?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["issueReport"]>



  export type IssueReportSelectScalar = {
    id?: boolean
    rollerId?: boolean
    taskId?: boolean
    stage?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type IssueReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rollerId" | "taskId" | "stage" | "description" | "status" | "createdAt" | "resolvedAt", ExtArgs["result"]["issueReport"]>

  export type $IssueReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IssueReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rollerId: string
      taskId: string | null
      stage: string
      description: string
      status: string
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["issueReport"]>
    composites: {}
  }

  type IssueReportGetPayload<S extends boolean | null | undefined | IssueReportDefaultArgs> = $Result.GetResult<Prisma.$IssueReportPayload, S>

  type IssueReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueReportCountAggregateInputType | true
    }

  export interface IssueReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssueReport'], meta: { name: 'IssueReport' } }
    /**
     * Find zero or one IssueReport that matches the filter.
     * @param {IssueReportFindUniqueArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueReportFindUniqueArgs>(args: SelectSubset<T, IssueReportFindUniqueArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IssueReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueReportFindUniqueOrThrowArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueReportFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssueReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportFindFirstArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueReportFindFirstArgs>(args?: SelectSubset<T, IssueReportFindFirstArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssueReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportFindFirstOrThrowArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueReportFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IssueReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueReports
     * const issueReports = await prisma.issueReport.findMany()
     * 
     * // Get first 10 IssueReports
     * const issueReports = await prisma.issueReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueReportWithIdOnly = await prisma.issueReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueReportFindManyArgs>(args?: SelectSubset<T, IssueReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IssueReport.
     * @param {IssueReportCreateArgs} args - Arguments to create a IssueReport.
     * @example
     * // Create one IssueReport
     * const IssueReport = await prisma.issueReport.create({
     *   data: {
     *     // ... data to create a IssueReport
     *   }
     * })
     * 
     */
    create<T extends IssueReportCreateArgs>(args: SelectSubset<T, IssueReportCreateArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IssueReports.
     * @param {IssueReportCreateManyArgs} args - Arguments to create many IssueReports.
     * @example
     * // Create many IssueReports
     * const issueReport = await prisma.issueReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueReportCreateManyArgs>(args?: SelectSubset<T, IssueReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IssueReport.
     * @param {IssueReportDeleteArgs} args - Arguments to delete one IssueReport.
     * @example
     * // Delete one IssueReport
     * const IssueReport = await prisma.issueReport.delete({
     *   where: {
     *     // ... filter to delete one IssueReport
     *   }
     * })
     * 
     */
    delete<T extends IssueReportDeleteArgs>(args: SelectSubset<T, IssueReportDeleteArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IssueReport.
     * @param {IssueReportUpdateArgs} args - Arguments to update one IssueReport.
     * @example
     * // Update one IssueReport
     * const issueReport = await prisma.issueReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueReportUpdateArgs>(args: SelectSubset<T, IssueReportUpdateArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IssueReports.
     * @param {IssueReportDeleteManyArgs} args - Arguments to filter IssueReports to delete.
     * @example
     * // Delete a few IssueReports
     * const { count } = await prisma.issueReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueReportDeleteManyArgs>(args?: SelectSubset<T, IssueReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueReports
     * const issueReport = await prisma.issueReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueReportUpdateManyArgs>(args: SelectSubset<T, IssueReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IssueReport.
     * @param {IssueReportUpsertArgs} args - Arguments to update or create a IssueReport.
     * @example
     * // Update or create a IssueReport
     * const issueReport = await prisma.issueReport.upsert({
     *   create: {
     *     // ... data to create a IssueReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueReport we want to update
     *   }
     * })
     */
    upsert<T extends IssueReportUpsertArgs>(args: SelectSubset<T, IssueReportUpsertArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IssueReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportCountArgs} args - Arguments to filter IssueReports to count.
     * @example
     * // Count the number of IssueReports
     * const count = await prisma.issueReport.count({
     *   where: {
     *     // ... the filter for the IssueReports we want to count
     *   }
     * })
    **/
    count<T extends IssueReportCountArgs>(
      args?: Subset<T, IssueReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssueReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueReportAggregateArgs>(args: Subset<T, IssueReportAggregateArgs>): Prisma.PrismaPromise<GetIssueReportAggregateType<T>>

    /**
     * Group by IssueReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueReportGroupByArgs['orderBy'] }
        : { orderBy?: IssueReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssueReport model
   */
  readonly fields: IssueReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssueReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IssueReport model
   */
  interface IssueReportFieldRefs {
    readonly id: FieldRef<"IssueReport", 'Int'>
    readonly rollerId: FieldRef<"IssueReport", 'String'>
    readonly taskId: FieldRef<"IssueReport", 'String'>
    readonly stage: FieldRef<"IssueReport", 'String'>
    readonly description: FieldRef<"IssueReport", 'String'>
    readonly status: FieldRef<"IssueReport", 'String'>
    readonly createdAt: FieldRef<"IssueReport", 'DateTime'>
    readonly resolvedAt: FieldRef<"IssueReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IssueReport findUnique
   */
  export type IssueReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport findUniqueOrThrow
   */
  export type IssueReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport findFirst
   */
  export type IssueReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueReports.
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReports.
     */
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * IssueReport findFirstOrThrow
   */
  export type IssueReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueReports.
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReports.
     */
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * IssueReport findMany
   */
  export type IssueReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Filter, which IssueReports to fetch.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssueReports.
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * IssueReport create
   */
  export type IssueReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * The data needed to create a IssueReport.
     */
    data: XOR<IssueReportCreateInput, IssueReportUncheckedCreateInput>
  }

  /**
   * IssueReport createMany
   */
  export type IssueReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueReports.
     */
    data: IssueReportCreateManyInput | IssueReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IssueReport update
   */
  export type IssueReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * The data needed to update a IssueReport.
     */
    data: XOR<IssueReportUpdateInput, IssueReportUncheckedUpdateInput>
    /**
     * Choose, which IssueReport to update.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport updateMany
   */
  export type IssueReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueReports.
     */
    data: XOR<IssueReportUpdateManyMutationInput, IssueReportUncheckedUpdateManyInput>
    /**
     * Filter which IssueReports to update
     */
    where?: IssueReportWhereInput
    /**
     * Limit how many IssueReports to update.
     */
    limit?: number
  }

  /**
   * IssueReport upsert
   */
  export type IssueReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * The filter to search for the IssueReport to update in case it exists.
     */
    where: IssueReportWhereUniqueInput
    /**
     * In case the IssueReport found by the `where` argument doesn't exist, create a new IssueReport with this data.
     */
    create: XOR<IssueReportCreateInput, IssueReportUncheckedCreateInput>
    /**
     * In case the IssueReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueReportUpdateInput, IssueReportUncheckedUpdateInput>
  }

  /**
   * IssueReport delete
   */
  export type IssueReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Filter which IssueReport to delete.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport deleteMany
   */
  export type IssueReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueReports to delete
     */
    where?: IssueReportWhereInput
    /**
     * Limit how many IssueReports to delete.
     */
    limit?: number
  }

  /**
   * IssueReport without action
   */
  export type IssueReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
  }


  /**
   * Model Roller
   */

  export type AggregateRoller = {
    _count: RollerCountAggregateOutputType | null
    _avg: RollerAvgAggregateOutputType | null
    _sum: RollerSumAggregateOutputType | null
    _min: RollerMinAggregateOutputType | null
    _max: RollerMaxAggregateOutputType | null
  }

  export type RollerAvgAggregateOutputType = {
    workshopOrderId: number | null
    diameterMm: number | null
    lengthMm: number | null
    thicknessMm: number | null
  }

  export type RollerSumAggregateOutputType = {
    workshopOrderId: number | null
    diameterMm: number | null
    lengthMm: number | null
    thicknessMm: number | null
  }

  export type RollerMinAggregateOutputType = {
    id: string | null
    orderCode: string | null
    workshopOrderId: number | null
    stage: string | null
    status: string | null
    ready: boolean | null
    settled: boolean | null
    sent: boolean | null
    settlementRecordedAt: Date | null
    sentAt: Date | null
    shipmentNote: string | null
    diameterMm: number | null
    lengthMm: number | null
    material: string | null
    thicknessMm: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type RollerMaxAggregateOutputType = {
    id: string | null
    orderCode: string | null
    workshopOrderId: number | null
    stage: string | null
    status: string | null
    ready: boolean | null
    settled: boolean | null
    sent: boolean | null
    settlementRecordedAt: Date | null
    sentAt: Date | null
    shipmentNote: string | null
    diameterMm: number | null
    lengthMm: number | null
    material: string | null
    thicknessMm: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type RollerCountAggregateOutputType = {
    id: number
    orderCode: number
    workshopOrderId: number
    stage: number
    status: number
    ready: number
    settled: number
    sent: number
    settlementRecordedAt: number
    sentAt: number
    shipmentNote: number
    diameterMm: number
    lengthMm: number
    material: number
    thicknessMm: number
    requiredStages: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type RollerAvgAggregateInputType = {
    workshopOrderId?: true
    diameterMm?: true
    lengthMm?: true
    thicknessMm?: true
  }

  export type RollerSumAggregateInputType = {
    workshopOrderId?: true
    diameterMm?: true
    lengthMm?: true
    thicknessMm?: true
  }

  export type RollerMinAggregateInputType = {
    id?: true
    orderCode?: true
    workshopOrderId?: true
    stage?: true
    status?: true
    ready?: true
    settled?: true
    sent?: true
    settlementRecordedAt?: true
    sentAt?: true
    shipmentNote?: true
    diameterMm?: true
    lengthMm?: true
    material?: true
    thicknessMm?: true
    updatedAt?: true
    createdAt?: true
  }

  export type RollerMaxAggregateInputType = {
    id?: true
    orderCode?: true
    workshopOrderId?: true
    stage?: true
    status?: true
    ready?: true
    settled?: true
    sent?: true
    settlementRecordedAt?: true
    sentAt?: true
    shipmentNote?: true
    diameterMm?: true
    lengthMm?: true
    material?: true
    thicknessMm?: true
    updatedAt?: true
    createdAt?: true
  }

  export type RollerCountAggregateInputType = {
    id?: true
    orderCode?: true
    workshopOrderId?: true
    stage?: true
    status?: true
    ready?: true
    settled?: true
    sent?: true
    settlementRecordedAt?: true
    sentAt?: true
    shipmentNote?: true
    diameterMm?: true
    lengthMm?: true
    material?: true
    thicknessMm?: true
    requiredStages?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type RollerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roller to aggregate.
     */
    where?: RollerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rollers to fetch.
     */
    orderBy?: RollerOrderByWithRelationInput | RollerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RollerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rollers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rollers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rollers
    **/
    _count?: true | RollerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RollerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RollerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RollerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RollerMaxAggregateInputType
  }

  export type GetRollerAggregateType<T extends RollerAggregateArgs> = {
        [P in keyof T & keyof AggregateRoller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoller[P]>
      : GetScalarType<T[P], AggregateRoller[P]>
  }




  export type RollerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollerWhereInput
    orderBy?: RollerOrderByWithAggregationInput | RollerOrderByWithAggregationInput[]
    by: RollerScalarFieldEnum[] | RollerScalarFieldEnum
    having?: RollerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RollerCountAggregateInputType | true
    _avg?: RollerAvgAggregateInputType
    _sum?: RollerSumAggregateInputType
    _min?: RollerMinAggregateInputType
    _max?: RollerMaxAggregateInputType
  }

  export type RollerGroupByOutputType = {
    id: string
    orderCode: string
    workshopOrderId: number | null
    stage: string
    status: string
    ready: boolean
    settled: boolean
    sent: boolean
    settlementRecordedAt: Date | null
    sentAt: Date | null
    shipmentNote: string | null
    diameterMm: number | null
    lengthMm: number | null
    material: string | null
    thicknessMm: number | null
    requiredStages: JsonValue | null
    updatedAt: Date
    createdAt: Date
    _count: RollerCountAggregateOutputType | null
    _avg: RollerAvgAggregateOutputType | null
    _sum: RollerSumAggregateOutputType | null
    _min: RollerMinAggregateOutputType | null
    _max: RollerMaxAggregateOutputType | null
  }

  type GetRollerGroupByPayload<T extends RollerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RollerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RollerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RollerGroupByOutputType[P]>
            : GetScalarType<T[P], RollerGroupByOutputType[P]>
        }
      >
    >


  export type RollerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderCode?: boolean
    workshopOrderId?: boolean
    stage?: boolean
    status?: boolean
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: boolean
    sentAt?: boolean
    shipmentNote?: boolean
    diameterMm?: boolean
    lengthMm?: boolean
    material?: boolean
    thicknessMm?: boolean
    requiredStages?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    workshopOrder?: boolean | Roller$workshopOrderArgs<ExtArgs>
    workTasks?: boolean | Roller$workTasksArgs<ExtArgs>
    _count?: boolean | RollerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roller"]>



  export type RollerSelectScalar = {
    id?: boolean
    orderCode?: boolean
    workshopOrderId?: boolean
    stage?: boolean
    status?: boolean
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: boolean
    sentAt?: boolean
    shipmentNote?: boolean
    diameterMm?: boolean
    lengthMm?: boolean
    material?: boolean
    thicknessMm?: boolean
    requiredStages?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type RollerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderCode" | "workshopOrderId" | "stage" | "status" | "ready" | "settled" | "sent" | "settlementRecordedAt" | "sentAt" | "shipmentNote" | "diameterMm" | "lengthMm" | "material" | "thicknessMm" | "requiredStages" | "updatedAt" | "createdAt", ExtArgs["result"]["roller"]>
  export type RollerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workshopOrder?: boolean | Roller$workshopOrderArgs<ExtArgs>
    workTasks?: boolean | Roller$workTasksArgs<ExtArgs>
    _count?: boolean | RollerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RollerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roller"
    objects: {
      workshopOrder: Prisma.$WorkshopOrderPayload<ExtArgs> | null
      workTasks: Prisma.$WorkTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderCode: string
      workshopOrderId: number | null
      stage: string
      status: string
      ready: boolean
      settled: boolean
      sent: boolean
      settlementRecordedAt: Date | null
      sentAt: Date | null
      shipmentNote: string | null
      diameterMm: number | null
      lengthMm: number | null
      material: string | null
      thicknessMm: number | null
      requiredStages: Prisma.JsonValue | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["roller"]>
    composites: {}
  }

  type RollerGetPayload<S extends boolean | null | undefined | RollerDefaultArgs> = $Result.GetResult<Prisma.$RollerPayload, S>

  type RollerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RollerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RollerCountAggregateInputType | true
    }

  export interface RollerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roller'], meta: { name: 'Roller' } }
    /**
     * Find zero or one Roller that matches the filter.
     * @param {RollerFindUniqueArgs} args - Arguments to find a Roller
     * @example
     * // Get one Roller
     * const roller = await prisma.roller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RollerFindUniqueArgs>(args: SelectSubset<T, RollerFindUniqueArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RollerFindUniqueOrThrowArgs} args - Arguments to find a Roller
     * @example
     * // Get one Roller
     * const roller = await prisma.roller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RollerFindUniqueOrThrowArgs>(args: SelectSubset<T, RollerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerFindFirstArgs} args - Arguments to find a Roller
     * @example
     * // Get one Roller
     * const roller = await prisma.roller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RollerFindFirstArgs>(args?: SelectSubset<T, RollerFindFirstArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerFindFirstOrThrowArgs} args - Arguments to find a Roller
     * @example
     * // Get one Roller
     * const roller = await prisma.roller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RollerFindFirstOrThrowArgs>(args?: SelectSubset<T, RollerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rollers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rollers
     * const rollers = await prisma.roller.findMany()
     * 
     * // Get first 10 Rollers
     * const rollers = await prisma.roller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rollerWithIdOnly = await prisma.roller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RollerFindManyArgs>(args?: SelectSubset<T, RollerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roller.
     * @param {RollerCreateArgs} args - Arguments to create a Roller.
     * @example
     * // Create one Roller
     * const Roller = await prisma.roller.create({
     *   data: {
     *     // ... data to create a Roller
     *   }
     * })
     * 
     */
    create<T extends RollerCreateArgs>(args: SelectSubset<T, RollerCreateArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rollers.
     * @param {RollerCreateManyArgs} args - Arguments to create many Rollers.
     * @example
     * // Create many Rollers
     * const roller = await prisma.roller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RollerCreateManyArgs>(args?: SelectSubset<T, RollerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roller.
     * @param {RollerDeleteArgs} args - Arguments to delete one Roller.
     * @example
     * // Delete one Roller
     * const Roller = await prisma.roller.delete({
     *   where: {
     *     // ... filter to delete one Roller
     *   }
     * })
     * 
     */
    delete<T extends RollerDeleteArgs>(args: SelectSubset<T, RollerDeleteArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roller.
     * @param {RollerUpdateArgs} args - Arguments to update one Roller.
     * @example
     * // Update one Roller
     * const roller = await prisma.roller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RollerUpdateArgs>(args: SelectSubset<T, RollerUpdateArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rollers.
     * @param {RollerDeleteManyArgs} args - Arguments to filter Rollers to delete.
     * @example
     * // Delete a few Rollers
     * const { count } = await prisma.roller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RollerDeleteManyArgs>(args?: SelectSubset<T, RollerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rollers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rollers
     * const roller = await prisma.roller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RollerUpdateManyArgs>(args: SelectSubset<T, RollerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roller.
     * @param {RollerUpsertArgs} args - Arguments to update or create a Roller.
     * @example
     * // Update or create a Roller
     * const roller = await prisma.roller.upsert({
     *   create: {
     *     // ... data to create a Roller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roller we want to update
     *   }
     * })
     */
    upsert<T extends RollerUpsertArgs>(args: SelectSubset<T, RollerUpsertArgs<ExtArgs>>): Prisma__RollerClient<$Result.GetResult<Prisma.$RollerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rollers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerCountArgs} args - Arguments to filter Rollers to count.
     * @example
     * // Count the number of Rollers
     * const count = await prisma.roller.count({
     *   where: {
     *     // ... the filter for the Rollers we want to count
     *   }
     * })
    **/
    count<T extends RollerCountArgs>(
      args?: Subset<T, RollerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RollerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RollerAggregateArgs>(args: Subset<T, RollerAggregateArgs>): Prisma.PrismaPromise<GetRollerAggregateType<T>>

    /**
     * Group by Roller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RollerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RollerGroupByArgs['orderBy'] }
        : { orderBy?: RollerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RollerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRollerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roller model
   */
  readonly fields: RollerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RollerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workshopOrder<T extends Roller$workshopOrderArgs<ExtArgs> = {}>(args?: Subset<T, Roller$workshopOrderArgs<ExtArgs>>): Prisma__WorkshopOrderClient<$Result.GetResult<Prisma.$WorkshopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workTasks<T extends Roller$workTasksArgs<ExtArgs> = {}>(args?: Subset<T, Roller$workTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roller model
   */
  interface RollerFieldRefs {
    readonly id: FieldRef<"Roller", 'String'>
    readonly orderCode: FieldRef<"Roller", 'String'>
    readonly workshopOrderId: FieldRef<"Roller", 'Int'>
    readonly stage: FieldRef<"Roller", 'String'>
    readonly status: FieldRef<"Roller", 'String'>
    readonly ready: FieldRef<"Roller", 'Boolean'>
    readonly settled: FieldRef<"Roller", 'Boolean'>
    readonly sent: FieldRef<"Roller", 'Boolean'>
    readonly settlementRecordedAt: FieldRef<"Roller", 'DateTime'>
    readonly sentAt: FieldRef<"Roller", 'DateTime'>
    readonly shipmentNote: FieldRef<"Roller", 'String'>
    readonly diameterMm: FieldRef<"Roller", 'Float'>
    readonly lengthMm: FieldRef<"Roller", 'Float'>
    readonly material: FieldRef<"Roller", 'String'>
    readonly thicknessMm: FieldRef<"Roller", 'Float'>
    readonly requiredStages: FieldRef<"Roller", 'Json'>
    readonly updatedAt: FieldRef<"Roller", 'DateTime'>
    readonly createdAt: FieldRef<"Roller", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roller findUnique
   */
  export type RollerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * Filter, which Roller to fetch.
     */
    where: RollerWhereUniqueInput
  }

  /**
   * Roller findUniqueOrThrow
   */
  export type RollerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * Filter, which Roller to fetch.
     */
    where: RollerWhereUniqueInput
  }

  /**
   * Roller findFirst
   */
  export type RollerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * Filter, which Roller to fetch.
     */
    where?: RollerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rollers to fetch.
     */
    orderBy?: RollerOrderByWithRelationInput | RollerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rollers.
     */
    cursor?: RollerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rollers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rollers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rollers.
     */
    distinct?: RollerScalarFieldEnum | RollerScalarFieldEnum[]
  }

  /**
   * Roller findFirstOrThrow
   */
  export type RollerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * Filter, which Roller to fetch.
     */
    where?: RollerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rollers to fetch.
     */
    orderBy?: RollerOrderByWithRelationInput | RollerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rollers.
     */
    cursor?: RollerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rollers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rollers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rollers.
     */
    distinct?: RollerScalarFieldEnum | RollerScalarFieldEnum[]
  }

  /**
   * Roller findMany
   */
  export type RollerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * Filter, which Rollers to fetch.
     */
    where?: RollerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rollers to fetch.
     */
    orderBy?: RollerOrderByWithRelationInput | RollerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rollers.
     */
    cursor?: RollerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rollers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rollers.
     */
    skip?: number
    distinct?: RollerScalarFieldEnum | RollerScalarFieldEnum[]
  }

  /**
   * Roller create
   */
  export type RollerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * The data needed to create a Roller.
     */
    data: XOR<RollerCreateInput, RollerUncheckedCreateInput>
  }

  /**
   * Roller createMany
   */
  export type RollerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rollers.
     */
    data: RollerCreateManyInput | RollerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roller update
   */
  export type RollerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * The data needed to update a Roller.
     */
    data: XOR<RollerUpdateInput, RollerUncheckedUpdateInput>
    /**
     * Choose, which Roller to update.
     */
    where: RollerWhereUniqueInput
  }

  /**
   * Roller updateMany
   */
  export type RollerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rollers.
     */
    data: XOR<RollerUpdateManyMutationInput, RollerUncheckedUpdateManyInput>
    /**
     * Filter which Rollers to update
     */
    where?: RollerWhereInput
    /**
     * Limit how many Rollers to update.
     */
    limit?: number
  }

  /**
   * Roller upsert
   */
  export type RollerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * The filter to search for the Roller to update in case it exists.
     */
    where: RollerWhereUniqueInput
    /**
     * In case the Roller found by the `where` argument doesn't exist, create a new Roller with this data.
     */
    create: XOR<RollerCreateInput, RollerUncheckedCreateInput>
    /**
     * In case the Roller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RollerUpdateInput, RollerUncheckedUpdateInput>
  }

  /**
   * Roller delete
   */
  export type RollerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
    /**
     * Filter which Roller to delete.
     */
    where: RollerWhereUniqueInput
  }

  /**
   * Roller deleteMany
   */
  export type RollerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rollers to delete
     */
    where?: RollerWhereInput
    /**
     * Limit how many Rollers to delete.
     */
    limit?: number
  }

  /**
   * Roller.workshopOrder
   */
  export type Roller$workshopOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopOrder
     */
    select?: WorkshopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkshopOrder
     */
    omit?: WorkshopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopOrderInclude<ExtArgs> | null
    where?: WorkshopOrderWhereInput
  }

  /**
   * Roller.workTasks
   */
  export type Roller$workTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTask
     */
    select?: WorkTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTask
     */
    omit?: WorkTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTaskInclude<ExtArgs> | null
    where?: WorkTaskWhereInput
    orderBy?: WorkTaskOrderByWithRelationInput | WorkTaskOrderByWithRelationInput[]
    cursor?: WorkTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkTaskScalarFieldEnum | WorkTaskScalarFieldEnum[]
  }

  /**
   * Roller without action
   */
  export type RollerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roller
     */
    select?: RollerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roller
     */
    omit?: RollerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollerInclude<ExtArgs> | null
  }


  /**
   * Model SystemNotification
   */

  export type AggregateSystemNotification = {
    _count: SystemNotificationCountAggregateOutputType | null
    _avg: SystemNotificationAvgAggregateOutputType | null
    _sum: SystemNotificationSumAggregateOutputType | null
    _min: SystemNotificationMinAggregateOutputType | null
    _max: SystemNotificationMaxAggregateOutputType | null
  }

  export type SystemNotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemNotificationSumAggregateOutputType = {
    id: number | null
  }

  export type SystemNotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    targetRole: string | null
    sourceType: string | null
    sourceId: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type SystemNotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    targetRole: string | null
    sourceType: string | null
    sourceId: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type SystemNotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    targetRole: number
    sourceType: number
    sourceId: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type SystemNotificationAvgAggregateInputType = {
    id?: true
  }

  export type SystemNotificationSumAggregateInputType = {
    id?: true
  }

  export type SystemNotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    targetRole?: true
    sourceType?: true
    sourceId?: true
    isRead?: true
    createdAt?: true
  }

  export type SystemNotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    targetRole?: true
    sourceType?: true
    sourceId?: true
    isRead?: true
    createdAt?: true
  }

  export type SystemNotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    targetRole?: true
    sourceType?: true
    sourceId?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type SystemNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemNotification to aggregate.
     */
    where?: SystemNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotifications to fetch.
     */
    orderBy?: SystemNotificationOrderByWithRelationInput | SystemNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemNotifications
    **/
    _count?: true | SystemNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemNotificationMaxAggregateInputType
  }

  export type GetSystemNotificationAggregateType<T extends SystemNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemNotification[P]>
      : GetScalarType<T[P], AggregateSystemNotification[P]>
  }




  export type SystemNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemNotificationWhereInput
    orderBy?: SystemNotificationOrderByWithAggregationInput | SystemNotificationOrderByWithAggregationInput[]
    by: SystemNotificationScalarFieldEnum[] | SystemNotificationScalarFieldEnum
    having?: SystemNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemNotificationCountAggregateInputType | true
    _avg?: SystemNotificationAvgAggregateInputType
    _sum?: SystemNotificationSumAggregateInputType
    _min?: SystemNotificationMinAggregateInputType
    _max?: SystemNotificationMaxAggregateInputType
  }

  export type SystemNotificationGroupByOutputType = {
    id: number
    title: string
    message: string
    targetRole: string
    sourceType: string | null
    sourceId: string | null
    isRead: boolean
    createdAt: Date
    _count: SystemNotificationCountAggregateOutputType | null
    _avg: SystemNotificationAvgAggregateOutputType | null
    _sum: SystemNotificationSumAggregateOutputType | null
    _min: SystemNotificationMinAggregateOutputType | null
    _max: SystemNotificationMaxAggregateOutputType | null
  }

  type GetSystemNotificationGroupByPayload<T extends SystemNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], SystemNotificationGroupByOutputType[P]>
        }
      >
    >


  export type SystemNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    targetRole?: boolean
    sourceType?: boolean
    sourceId?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemNotification"]>



  export type SystemNotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    targetRole?: boolean
    sourceType?: boolean
    sourceId?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type SystemNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "targetRole" | "sourceType" | "sourceId" | "isRead" | "createdAt", ExtArgs["result"]["systemNotification"]>

  export type $SystemNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemNotification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      message: string
      targetRole: string
      sourceType: string | null
      sourceId: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["systemNotification"]>
    composites: {}
  }

  type SystemNotificationGetPayload<S extends boolean | null | undefined | SystemNotificationDefaultArgs> = $Result.GetResult<Prisma.$SystemNotificationPayload, S>

  type SystemNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemNotificationCountAggregateInputType | true
    }

  export interface SystemNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemNotification'], meta: { name: 'SystemNotification' } }
    /**
     * Find zero or one SystemNotification that matches the filter.
     * @param {SystemNotificationFindUniqueArgs} args - Arguments to find a SystemNotification
     * @example
     * // Get one SystemNotification
     * const systemNotification = await prisma.systemNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemNotificationFindUniqueArgs>(args: SelectSubset<T, SystemNotificationFindUniqueArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemNotificationFindUniqueOrThrowArgs} args - Arguments to find a SystemNotification
     * @example
     * // Get one SystemNotification
     * const systemNotification = await prisma.systemNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationFindFirstArgs} args - Arguments to find a SystemNotification
     * @example
     * // Get one SystemNotification
     * const systemNotification = await prisma.systemNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemNotificationFindFirstArgs>(args?: SelectSubset<T, SystemNotificationFindFirstArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationFindFirstOrThrowArgs} args - Arguments to find a SystemNotification
     * @example
     * // Get one SystemNotification
     * const systemNotification = await prisma.systemNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemNotifications
     * const systemNotifications = await prisma.systemNotification.findMany()
     * 
     * // Get first 10 SystemNotifications
     * const systemNotifications = await prisma.systemNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemNotificationWithIdOnly = await prisma.systemNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemNotificationFindManyArgs>(args?: SelectSubset<T, SystemNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemNotification.
     * @param {SystemNotificationCreateArgs} args - Arguments to create a SystemNotification.
     * @example
     * // Create one SystemNotification
     * const SystemNotification = await prisma.systemNotification.create({
     *   data: {
     *     // ... data to create a SystemNotification
     *   }
     * })
     * 
     */
    create<T extends SystemNotificationCreateArgs>(args: SelectSubset<T, SystemNotificationCreateArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemNotifications.
     * @param {SystemNotificationCreateManyArgs} args - Arguments to create many SystemNotifications.
     * @example
     * // Create many SystemNotifications
     * const systemNotification = await prisma.systemNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemNotificationCreateManyArgs>(args?: SelectSubset<T, SystemNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemNotification.
     * @param {SystemNotificationDeleteArgs} args - Arguments to delete one SystemNotification.
     * @example
     * // Delete one SystemNotification
     * const SystemNotification = await prisma.systemNotification.delete({
     *   where: {
     *     // ... filter to delete one SystemNotification
     *   }
     * })
     * 
     */
    delete<T extends SystemNotificationDeleteArgs>(args: SelectSubset<T, SystemNotificationDeleteArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemNotification.
     * @param {SystemNotificationUpdateArgs} args - Arguments to update one SystemNotification.
     * @example
     * // Update one SystemNotification
     * const systemNotification = await prisma.systemNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemNotificationUpdateArgs>(args: SelectSubset<T, SystemNotificationUpdateArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemNotifications.
     * @param {SystemNotificationDeleteManyArgs} args - Arguments to filter SystemNotifications to delete.
     * @example
     * // Delete a few SystemNotifications
     * const { count } = await prisma.systemNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemNotificationDeleteManyArgs>(args?: SelectSubset<T, SystemNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemNotifications
     * const systemNotification = await prisma.systemNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemNotificationUpdateManyArgs>(args: SelectSubset<T, SystemNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemNotification.
     * @param {SystemNotificationUpsertArgs} args - Arguments to update or create a SystemNotification.
     * @example
     * // Update or create a SystemNotification
     * const systemNotification = await prisma.systemNotification.upsert({
     *   create: {
     *     // ... data to create a SystemNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemNotification we want to update
     *   }
     * })
     */
    upsert<T extends SystemNotificationUpsertArgs>(args: SelectSubset<T, SystemNotificationUpsertArgs<ExtArgs>>): Prisma__SystemNotificationClient<$Result.GetResult<Prisma.$SystemNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationCountArgs} args - Arguments to filter SystemNotifications to count.
     * @example
     * // Count the number of SystemNotifications
     * const count = await prisma.systemNotification.count({
     *   where: {
     *     // ... the filter for the SystemNotifications we want to count
     *   }
     * })
    **/
    count<T extends SystemNotificationCountArgs>(
      args?: Subset<T, SystemNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemNotificationAggregateArgs>(args: Subset<T, SystemNotificationAggregateArgs>): Prisma.PrismaPromise<GetSystemNotificationAggregateType<T>>

    /**
     * Group by SystemNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemNotificationGroupByArgs['orderBy'] }
        : { orderBy?: SystemNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemNotification model
   */
  readonly fields: SystemNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemNotification model
   */
  interface SystemNotificationFieldRefs {
    readonly id: FieldRef<"SystemNotification", 'Int'>
    readonly title: FieldRef<"SystemNotification", 'String'>
    readonly message: FieldRef<"SystemNotification", 'String'>
    readonly targetRole: FieldRef<"SystemNotification", 'String'>
    readonly sourceType: FieldRef<"SystemNotification", 'String'>
    readonly sourceId: FieldRef<"SystemNotification", 'String'>
    readonly isRead: FieldRef<"SystemNotification", 'Boolean'>
    readonly createdAt: FieldRef<"SystemNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemNotification findUnique
   */
  export type SystemNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotification to fetch.
     */
    where: SystemNotificationWhereUniqueInput
  }

  /**
   * SystemNotification findUniqueOrThrow
   */
  export type SystemNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotification to fetch.
     */
    where: SystemNotificationWhereUniqueInput
  }

  /**
   * SystemNotification findFirst
   */
  export type SystemNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotification to fetch.
     */
    where?: SystemNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotifications to fetch.
     */
    orderBy?: SystemNotificationOrderByWithRelationInput | SystemNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemNotifications.
     */
    cursor?: SystemNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemNotifications.
     */
    distinct?: SystemNotificationScalarFieldEnum | SystemNotificationScalarFieldEnum[]
  }

  /**
   * SystemNotification findFirstOrThrow
   */
  export type SystemNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotification to fetch.
     */
    where?: SystemNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotifications to fetch.
     */
    orderBy?: SystemNotificationOrderByWithRelationInput | SystemNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemNotifications.
     */
    cursor?: SystemNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemNotifications.
     */
    distinct?: SystemNotificationScalarFieldEnum | SystemNotificationScalarFieldEnum[]
  }

  /**
   * SystemNotification findMany
   */
  export type SystemNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotifications to fetch.
     */
    where?: SystemNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotifications to fetch.
     */
    orderBy?: SystemNotificationOrderByWithRelationInput | SystemNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemNotifications.
     */
    cursor?: SystemNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotifications.
     */
    skip?: number
    distinct?: SystemNotificationScalarFieldEnum | SystemNotificationScalarFieldEnum[]
  }

  /**
   * SystemNotification create
   */
  export type SystemNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemNotification.
     */
    data: XOR<SystemNotificationCreateInput, SystemNotificationUncheckedCreateInput>
  }

  /**
   * SystemNotification createMany
   */
  export type SystemNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemNotifications.
     */
    data: SystemNotificationCreateManyInput | SystemNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemNotification update
   */
  export type SystemNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemNotification.
     */
    data: XOR<SystemNotificationUpdateInput, SystemNotificationUncheckedUpdateInput>
    /**
     * Choose, which SystemNotification to update.
     */
    where: SystemNotificationWhereUniqueInput
  }

  /**
   * SystemNotification updateMany
   */
  export type SystemNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemNotifications.
     */
    data: XOR<SystemNotificationUpdateManyMutationInput, SystemNotificationUncheckedUpdateManyInput>
    /**
     * Filter which SystemNotifications to update
     */
    where?: SystemNotificationWhereInput
    /**
     * Limit how many SystemNotifications to update.
     */
    limit?: number
  }

  /**
   * SystemNotification upsert
   */
  export type SystemNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemNotification to update in case it exists.
     */
    where: SystemNotificationWhereUniqueInput
    /**
     * In case the SystemNotification found by the `where` argument doesn't exist, create a new SystemNotification with this data.
     */
    create: XOR<SystemNotificationCreateInput, SystemNotificationUncheckedCreateInput>
    /**
     * In case the SystemNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemNotificationUpdateInput, SystemNotificationUncheckedUpdateInput>
  }

  /**
   * SystemNotification delete
   */
  export type SystemNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
    /**
     * Filter which SystemNotification to delete.
     */
    where: SystemNotificationWhereUniqueInput
  }

  /**
   * SystemNotification deleteMany
   */
  export type SystemNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemNotifications to delete
     */
    where?: SystemNotificationWhereInput
    /**
     * Limit how many SystemNotifications to delete.
     */
    limit?: number
  }

  /**
   * SystemNotification without action
   */
  export type SystemNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotification
     */
    select?: SystemNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotification
     */
    omit?: SystemNotificationOmit<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
  }

  export type ReferralSumAggregateOutputType = {
    id: number | null
    issueId: number | null
  }

  export type ReferralMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    targetRole: string | null
    sourceRole: string | null
    sourceType: string | null
    sourceId: string | null
    orderCode: string | null
    rollerId: string | null
    taskId: string | null
    issueId: number | null
    status: string | null
    priority: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    targetRole: string | null
    sourceRole: string | null
    sourceType: string | null
    sourceId: string | null
    orderCode: string | null
    rollerId: string | null
    taskId: string | null
    issueId: number | null
    status: string | null
    priority: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    title: number
    description: number
    targetRole: number
    sourceRole: number
    sourceType: number
    sourceId: number
    orderCode: number
    rollerId: number
    taskId: number
    issueId: number
    status: number
    priority: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    id?: true
    issueId?: true
  }

  export type ReferralSumAggregateInputType = {
    id?: true
    issueId?: true
  }

  export type ReferralMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetRole?: true
    sourceRole?: true
    sourceType?: true
    sourceId?: true
    orderCode?: true
    rollerId?: true
    taskId?: true
    issueId?: true
    status?: true
    priority?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetRole?: true
    sourceRole?: true
    sourceType?: true
    sourceId?: true
    orderCode?: true
    rollerId?: true
    taskId?: true
    issueId?: true
    status?: true
    priority?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetRole?: true
    sourceRole?: true
    sourceType?: true
    sourceId?: true
    orderCode?: true
    rollerId?: true
    taskId?: true
    issueId?: true
    status?: true
    priority?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: number
    title: string
    description: string
    targetRole: string
    sourceRole: string
    sourceType: string | null
    sourceId: string | null
    orderCode: string | null
    rollerId: string | null
    taskId: string | null
    issueId: number | null
    status: string
    priority: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetRole?: boolean
    sourceRole?: boolean
    sourceType?: boolean
    sourceId?: boolean
    orderCode?: boolean
    rollerId?: boolean
    taskId?: boolean
    issueId?: boolean
    status?: boolean
    priority?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Referral$messagesArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>



  export type ReferralSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    targetRole?: boolean
    sourceRole?: boolean
    sourceType?: boolean
    sourceId?: boolean
    orderCode?: boolean
    rollerId?: boolean
    taskId?: boolean
    issueId?: boolean
    status?: boolean
    priority?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "targetRole" | "sourceRole" | "sourceType" | "sourceId" | "orderCode" | "rollerId" | "taskId" | "issueId" | "status" | "priority" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Referral$messagesArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      messages: Prisma.$ReferralMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      targetRole: string
      sourceRole: string
      sourceType: string | null
      sourceId: string | null
      orderCode: string | null
      rollerId: string | null
      taskId: string | null
      issueId: number | null
      status: string
      priority: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Referral$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Referral$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'Int'>
    readonly title: FieldRef<"Referral", 'String'>
    readonly description: FieldRef<"Referral", 'String'>
    readonly targetRole: FieldRef<"Referral", 'String'>
    readonly sourceRole: FieldRef<"Referral", 'String'>
    readonly sourceType: FieldRef<"Referral", 'String'>
    readonly sourceId: FieldRef<"Referral", 'String'>
    readonly orderCode: FieldRef<"Referral", 'String'>
    readonly rollerId: FieldRef<"Referral", 'String'>
    readonly taskId: FieldRef<"Referral", 'String'>
    readonly issueId: FieldRef<"Referral", 'Int'>
    readonly status: FieldRef<"Referral", 'String'>
    readonly priority: FieldRef<"Referral", 'String'>
    readonly completedAt: FieldRef<"Referral", 'DateTime'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
    readonly updatedAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral.messages
   */
  export type Referral$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    where?: ReferralMessageWhereInput
    orderBy?: ReferralMessageOrderByWithRelationInput | ReferralMessageOrderByWithRelationInput[]
    cursor?: ReferralMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralMessageScalarFieldEnum | ReferralMessageScalarFieldEnum[]
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model ReferralMessage
   */

  export type AggregateReferralMessage = {
    _count: ReferralMessageCountAggregateOutputType | null
    _avg: ReferralMessageAvgAggregateOutputType | null
    _sum: ReferralMessageSumAggregateOutputType | null
    _min: ReferralMessageMinAggregateOutputType | null
    _max: ReferralMessageMaxAggregateOutputType | null
  }

  export type ReferralMessageAvgAggregateOutputType = {
    id: number | null
    referralId: number | null
  }

  export type ReferralMessageSumAggregateOutputType = {
    id: number | null
    referralId: number | null
  }

  export type ReferralMessageMinAggregateOutputType = {
    id: number | null
    referralId: number | null
    authorRole: string | null
    authorName: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ReferralMessageMaxAggregateOutputType = {
    id: number | null
    referralId: number | null
    authorRole: string | null
    authorName: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ReferralMessageCountAggregateOutputType = {
    id: number
    referralId: number
    authorRole: number
    authorName: number
    message: number
    createdAt: number
    _all: number
  }


  export type ReferralMessageAvgAggregateInputType = {
    id?: true
    referralId?: true
  }

  export type ReferralMessageSumAggregateInputType = {
    id?: true
    referralId?: true
  }

  export type ReferralMessageMinAggregateInputType = {
    id?: true
    referralId?: true
    authorRole?: true
    authorName?: true
    message?: true
    createdAt?: true
  }

  export type ReferralMessageMaxAggregateInputType = {
    id?: true
    referralId?: true
    authorRole?: true
    authorName?: true
    message?: true
    createdAt?: true
  }

  export type ReferralMessageCountAggregateInputType = {
    id?: true
    referralId?: true
    authorRole?: true
    authorName?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralMessage to aggregate.
     */
    where?: ReferralMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralMessages to fetch.
     */
    orderBy?: ReferralMessageOrderByWithRelationInput | ReferralMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralMessages
    **/
    _count?: true | ReferralMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMessageMaxAggregateInputType
  }

  export type GetReferralMessageAggregateType<T extends ReferralMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralMessage[P]>
      : GetScalarType<T[P], AggregateReferralMessage[P]>
  }




  export type ReferralMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralMessageWhereInput
    orderBy?: ReferralMessageOrderByWithAggregationInput | ReferralMessageOrderByWithAggregationInput[]
    by: ReferralMessageScalarFieldEnum[] | ReferralMessageScalarFieldEnum
    having?: ReferralMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralMessageCountAggregateInputType | true
    _avg?: ReferralMessageAvgAggregateInputType
    _sum?: ReferralMessageSumAggregateInputType
    _min?: ReferralMessageMinAggregateInputType
    _max?: ReferralMessageMaxAggregateInputType
  }

  export type ReferralMessageGroupByOutputType = {
    id: number
    referralId: number
    authorRole: string
    authorName: string | null
    message: string
    createdAt: Date
    _count: ReferralMessageCountAggregateOutputType | null
    _avg: ReferralMessageAvgAggregateOutputType | null
    _sum: ReferralMessageSumAggregateOutputType | null
    _min: ReferralMessageMinAggregateOutputType | null
    _max: ReferralMessageMaxAggregateOutputType | null
  }

  type GetReferralMessageGroupByPayload<T extends ReferralMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralMessageGroupByOutputType[P]>
        }
      >
    >


  export type ReferralMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    authorRole?: boolean
    authorName?: boolean
    message?: boolean
    createdAt?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralMessage"]>



  export type ReferralMessageSelectScalar = {
    id?: boolean
    referralId?: boolean
    authorRole?: boolean
    authorName?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ReferralMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referralId" | "authorRole" | "authorName" | "message" | "createdAt", ExtArgs["result"]["referralMessage"]>
  export type ReferralMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }

  export type $ReferralMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralMessage"
    objects: {
      referral: Prisma.$ReferralPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      referralId: number
      authorRole: string
      authorName: string | null
      message: string
      createdAt: Date
    }, ExtArgs["result"]["referralMessage"]>
    composites: {}
  }

  type ReferralMessageGetPayload<S extends boolean | null | undefined | ReferralMessageDefaultArgs> = $Result.GetResult<Prisma.$ReferralMessagePayload, S>

  type ReferralMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralMessageCountAggregateInputType | true
    }

  export interface ReferralMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralMessage'], meta: { name: 'ReferralMessage' } }
    /**
     * Find zero or one ReferralMessage that matches the filter.
     * @param {ReferralMessageFindUniqueArgs} args - Arguments to find a ReferralMessage
     * @example
     * // Get one ReferralMessage
     * const referralMessage = await prisma.referralMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralMessageFindUniqueArgs>(args: SelectSubset<T, ReferralMessageFindUniqueArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralMessageFindUniqueOrThrowArgs} args - Arguments to find a ReferralMessage
     * @example
     * // Get one ReferralMessage
     * const referralMessage = await prisma.referralMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageFindFirstArgs} args - Arguments to find a ReferralMessage
     * @example
     * // Get one ReferralMessage
     * const referralMessage = await prisma.referralMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralMessageFindFirstArgs>(args?: SelectSubset<T, ReferralMessageFindFirstArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageFindFirstOrThrowArgs} args - Arguments to find a ReferralMessage
     * @example
     * // Get one ReferralMessage
     * const referralMessage = await prisma.referralMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralMessages
     * const referralMessages = await prisma.referralMessage.findMany()
     * 
     * // Get first 10 ReferralMessages
     * const referralMessages = await prisma.referralMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralMessageWithIdOnly = await prisma.referralMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralMessageFindManyArgs>(args?: SelectSubset<T, ReferralMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralMessage.
     * @param {ReferralMessageCreateArgs} args - Arguments to create a ReferralMessage.
     * @example
     * // Create one ReferralMessage
     * const ReferralMessage = await prisma.referralMessage.create({
     *   data: {
     *     // ... data to create a ReferralMessage
     *   }
     * })
     * 
     */
    create<T extends ReferralMessageCreateArgs>(args: SelectSubset<T, ReferralMessageCreateArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralMessages.
     * @param {ReferralMessageCreateManyArgs} args - Arguments to create many ReferralMessages.
     * @example
     * // Create many ReferralMessages
     * const referralMessage = await prisma.referralMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralMessageCreateManyArgs>(args?: SelectSubset<T, ReferralMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReferralMessage.
     * @param {ReferralMessageDeleteArgs} args - Arguments to delete one ReferralMessage.
     * @example
     * // Delete one ReferralMessage
     * const ReferralMessage = await prisma.referralMessage.delete({
     *   where: {
     *     // ... filter to delete one ReferralMessage
     *   }
     * })
     * 
     */
    delete<T extends ReferralMessageDeleteArgs>(args: SelectSubset<T, ReferralMessageDeleteArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralMessage.
     * @param {ReferralMessageUpdateArgs} args - Arguments to update one ReferralMessage.
     * @example
     * // Update one ReferralMessage
     * const referralMessage = await prisma.referralMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralMessageUpdateArgs>(args: SelectSubset<T, ReferralMessageUpdateArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralMessages.
     * @param {ReferralMessageDeleteManyArgs} args - Arguments to filter ReferralMessages to delete.
     * @example
     * // Delete a few ReferralMessages
     * const { count } = await prisma.referralMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralMessageDeleteManyArgs>(args?: SelectSubset<T, ReferralMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralMessages
     * const referralMessage = await prisma.referralMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralMessageUpdateManyArgs>(args: SelectSubset<T, ReferralMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferralMessage.
     * @param {ReferralMessageUpsertArgs} args - Arguments to update or create a ReferralMessage.
     * @example
     * // Update or create a ReferralMessage
     * const referralMessage = await prisma.referralMessage.upsert({
     *   create: {
     *     // ... data to create a ReferralMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralMessage we want to update
     *   }
     * })
     */
    upsert<T extends ReferralMessageUpsertArgs>(args: SelectSubset<T, ReferralMessageUpsertArgs<ExtArgs>>): Prisma__ReferralMessageClient<$Result.GetResult<Prisma.$ReferralMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageCountArgs} args - Arguments to filter ReferralMessages to count.
     * @example
     * // Count the number of ReferralMessages
     * const count = await prisma.referralMessage.count({
     *   where: {
     *     // ... the filter for the ReferralMessages we want to count
     *   }
     * })
    **/
    count<T extends ReferralMessageCountArgs>(
      args?: Subset<T, ReferralMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralMessageAggregateArgs>(args: Subset<T, ReferralMessageAggregateArgs>): Prisma.PrismaPromise<GetReferralMessageAggregateType<T>>

    /**
     * Group by ReferralMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralMessageGroupByArgs['orderBy'] }
        : { orderBy?: ReferralMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralMessage model
   */
  readonly fields: ReferralMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral<T extends ReferralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReferralDefaultArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReferralMessage model
   */
  interface ReferralMessageFieldRefs {
    readonly id: FieldRef<"ReferralMessage", 'Int'>
    readonly referralId: FieldRef<"ReferralMessage", 'Int'>
    readonly authorRole: FieldRef<"ReferralMessage", 'String'>
    readonly authorName: FieldRef<"ReferralMessage", 'String'>
    readonly message: FieldRef<"ReferralMessage", 'String'>
    readonly createdAt: FieldRef<"ReferralMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralMessage findUnique
   */
  export type ReferralMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralMessage to fetch.
     */
    where: ReferralMessageWhereUniqueInput
  }

  /**
   * ReferralMessage findUniqueOrThrow
   */
  export type ReferralMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralMessage to fetch.
     */
    where: ReferralMessageWhereUniqueInput
  }

  /**
   * ReferralMessage findFirst
   */
  export type ReferralMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralMessage to fetch.
     */
    where?: ReferralMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralMessages to fetch.
     */
    orderBy?: ReferralMessageOrderByWithRelationInput | ReferralMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralMessages.
     */
    cursor?: ReferralMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralMessages.
     */
    distinct?: ReferralMessageScalarFieldEnum | ReferralMessageScalarFieldEnum[]
  }

  /**
   * ReferralMessage findFirstOrThrow
   */
  export type ReferralMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralMessage to fetch.
     */
    where?: ReferralMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralMessages to fetch.
     */
    orderBy?: ReferralMessageOrderByWithRelationInput | ReferralMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralMessages.
     */
    cursor?: ReferralMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralMessages.
     */
    distinct?: ReferralMessageScalarFieldEnum | ReferralMessageScalarFieldEnum[]
  }

  /**
   * ReferralMessage findMany
   */
  export type ReferralMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralMessages to fetch.
     */
    where?: ReferralMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralMessages to fetch.
     */
    orderBy?: ReferralMessageOrderByWithRelationInput | ReferralMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralMessages.
     */
    cursor?: ReferralMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralMessages.
     */
    skip?: number
    distinct?: ReferralMessageScalarFieldEnum | ReferralMessageScalarFieldEnum[]
  }

  /**
   * ReferralMessage create
   */
  export type ReferralMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralMessage.
     */
    data: XOR<ReferralMessageCreateInput, ReferralMessageUncheckedCreateInput>
  }

  /**
   * ReferralMessage createMany
   */
  export type ReferralMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralMessages.
     */
    data: ReferralMessageCreateManyInput | ReferralMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralMessage update
   */
  export type ReferralMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralMessage.
     */
    data: XOR<ReferralMessageUpdateInput, ReferralMessageUncheckedUpdateInput>
    /**
     * Choose, which ReferralMessage to update.
     */
    where: ReferralMessageWhereUniqueInput
  }

  /**
   * ReferralMessage updateMany
   */
  export type ReferralMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralMessages.
     */
    data: XOR<ReferralMessageUpdateManyMutationInput, ReferralMessageUncheckedUpdateManyInput>
    /**
     * Filter which ReferralMessages to update
     */
    where?: ReferralMessageWhereInput
    /**
     * Limit how many ReferralMessages to update.
     */
    limit?: number
  }

  /**
   * ReferralMessage upsert
   */
  export type ReferralMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralMessage to update in case it exists.
     */
    where: ReferralMessageWhereUniqueInput
    /**
     * In case the ReferralMessage found by the `where` argument doesn't exist, create a new ReferralMessage with this data.
     */
    create: XOR<ReferralMessageCreateInput, ReferralMessageUncheckedCreateInput>
    /**
     * In case the ReferralMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralMessageUpdateInput, ReferralMessageUncheckedUpdateInput>
  }

  /**
   * ReferralMessage delete
   */
  export type ReferralMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
    /**
     * Filter which ReferralMessage to delete.
     */
    where: ReferralMessageWhereUniqueInput
  }

  /**
   * ReferralMessage deleteMany
   */
  export type ReferralMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralMessages to delete
     */
    where?: ReferralMessageWhereInput
    /**
     * Limit how many ReferralMessages to delete.
     */
    limit?: number
  }

  /**
   * ReferralMessage without action
   */
  export type ReferralMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralMessage
     */
    select?: ReferralMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralMessage
     */
    omit?: ReferralMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HealthCheckScalarFieldEnum: {
    id: 'id',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type HealthCheckScalarFieldEnum = (typeof HealthCheckScalarFieldEnum)[keyof typeof HealthCheckScalarFieldEnum]


  export const AppUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    active: 'active',
    phone: 'phone',
    baleUserId: 'baleUserId',
    profileImageUrl: 'profileImageUrl',
    notes: 'notes',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const WorkerSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stage: 'stage',
    createdAt: 'createdAt'
  };

  export type WorkerSkillScalarFieldEnum = (typeof WorkerSkillScalarFieldEnum)[keyof typeof WorkerSkillScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    phone: 'phone',
    address: 'address',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const WorkshopOrderScalarFieldEnum: {
    id: 'id',
    code: 'code',
    customerId: 'customerId',
    settlementType: 'settlementType',
    status: 'status',
    satisfactionStatus: 'satisfactionStatus',
    notes: 'notes',
    productionStartedAt: 'productionStartedAt',
    productionFinishedAt: 'productionFinishedAt',
    deliveredAt: 'deliveredAt',
    satisfactionDueAt: 'satisfactionDueAt',
    closedAt: 'closedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkshopOrderScalarFieldEnum = (typeof WorkshopOrderScalarFieldEnum)[keyof typeof WorkshopOrderScalarFieldEnum]


  export const SatisfactionFeedbackScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    result: 'result',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type SatisfactionFeedbackScalarFieldEnum = (typeof SatisfactionFeedbackScalarFieldEnum)[keyof typeof SatisfactionFeedbackScalarFieldEnum]


  export const AttendanceEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workerName: 'workerName',
    type: 'type',
    note: 'note',
    eventAt: 'eventAt',
    eventDateFa: 'eventDateFa',
    eventTimeFa: 'eventTimeFa',
    eventMonthFa: 'eventMonthFa',
    createdAt: 'createdAt'
  };

  export type AttendanceEventScalarFieldEnum = (typeof AttendanceEventScalarFieldEnum)[keyof typeof AttendanceEventScalarFieldEnum]


  export const AttendanceDailySummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workerName: 'workerName',
    shiftDate: 'shiftDate',
    shiftDateFa: 'shiftDateFa',
    shiftMonthFa: 'shiftMonthFa',
    checkInAt: 'checkInAt',
    checkOutAt: 'checkOutAt',
    lastState: 'lastState',
    earlyArrivalReward: 'earlyArrivalReward',
    endOfDayReward: 'endOfDayReward',
    overtimeMinutes: 'overtimeMinutes',
    tempExitCount: 'tempExitCount',
    totalRewardAmount: 'totalRewardAmount',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceDailySummaryScalarFieldEnum = (typeof AttendanceDailySummaryScalarFieldEnum)[keyof typeof AttendanceDailySummaryScalarFieldEnum]


  export const RewardLedgerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workerName: 'workerName',
    shiftDate: 'shiftDate',
    shiftDateFa: 'shiftDateFa',
    type: 'type',
    amount: 'amount',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type RewardLedgerScalarFieldEnum = (typeof RewardLedgerScalarFieldEnum)[keyof typeof RewardLedgerScalarFieldEnum]


  export const WorkTaskScalarFieldEnum: {
    id: 'id',
    rollerId: 'rollerId',
    sequence: 'sequence',
    stage: 'stage',
    status: 'status',
    worker: 'worker',
    pickedByUserId: 'pickedByUserId',
    availableAt: 'availableAt',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    blockedAt: 'blockedAt',
    blockedReason: 'blockedReason',
    estimatedDays: 'estimatedDays',
    dueAt: 'dueAt',
    completedEarly: 'completedEarly',
    delayed: 'delayed',
    delayNotified: 'delayNotified',
    delayDetectedAt: 'delayDetectedAt',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type WorkTaskScalarFieldEnum = (typeof WorkTaskScalarFieldEnum)[keyof typeof WorkTaskScalarFieldEnum]


  export const IssueReportScalarFieldEnum: {
    id: 'id',
    rollerId: 'rollerId',
    taskId: 'taskId',
    stage: 'stage',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type IssueReportScalarFieldEnum = (typeof IssueReportScalarFieldEnum)[keyof typeof IssueReportScalarFieldEnum]


  export const RollerScalarFieldEnum: {
    id: 'id',
    orderCode: 'orderCode',
    workshopOrderId: 'workshopOrderId',
    stage: 'stage',
    status: 'status',
    ready: 'ready',
    settled: 'settled',
    sent: 'sent',
    settlementRecordedAt: 'settlementRecordedAt',
    sentAt: 'sentAt',
    shipmentNote: 'shipmentNote',
    diameterMm: 'diameterMm',
    lengthMm: 'lengthMm',
    material: 'material',
    thicknessMm: 'thicknessMm',
    requiredStages: 'requiredStages',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type RollerScalarFieldEnum = (typeof RollerScalarFieldEnum)[keyof typeof RollerScalarFieldEnum]


  export const SystemNotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    targetRole: 'targetRole',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type SystemNotificationScalarFieldEnum = (typeof SystemNotificationScalarFieldEnum)[keyof typeof SystemNotificationScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    targetRole: 'targetRole',
    sourceRole: 'sourceRole',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    orderCode: 'orderCode',
    rollerId: 'rollerId',
    taskId: 'taskId',
    issueId: 'issueId',
    status: 'status',
    priority: 'priority',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const ReferralMessageScalarFieldEnum: {
    id: 'id',
    referralId: 'referralId',
    authorRole: 'authorRole',
    authorName: 'authorName',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ReferralMessageScalarFieldEnum = (typeof ReferralMessageScalarFieldEnum)[keyof typeof ReferralMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const HealthCheckOrderByRelevanceFieldEnum: {
    label: 'label'
  };

  export type HealthCheckOrderByRelevanceFieldEnum = (typeof HealthCheckOrderByRelevanceFieldEnum)[keyof typeof HealthCheckOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AppUserOrderByRelevanceFieldEnum: {
    username: 'username',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    baleUserId: 'baleUserId',
    profileImageUrl: 'profileImageUrl',
    notes: 'notes'
  };

  export type AppUserOrderByRelevanceFieldEnum = (typeof AppUserOrderByRelevanceFieldEnum)[keyof typeof AppUserOrderByRelevanceFieldEnum]


  export const WorkerSkillOrderByRelevanceFieldEnum: {
    stage: 'stage'
  };

  export type WorkerSkillOrderByRelevanceFieldEnum = (typeof WorkerSkillOrderByRelevanceFieldEnum)[keyof typeof WorkerSkillOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name',
    phone: 'phone',
    address: 'address',
    notes: 'notes'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const WorkshopOrderOrderByRelevanceFieldEnum: {
    code: 'code',
    status: 'status',
    satisfactionStatus: 'satisfactionStatus',
    notes: 'notes'
  };

  export type WorkshopOrderOrderByRelevanceFieldEnum = (typeof WorkshopOrderOrderByRelevanceFieldEnum)[keyof typeof WorkshopOrderOrderByRelevanceFieldEnum]


  export const SatisfactionFeedbackOrderByRelevanceFieldEnum: {
    result: 'result',
    reason: 'reason'
  };

  export type SatisfactionFeedbackOrderByRelevanceFieldEnum = (typeof SatisfactionFeedbackOrderByRelevanceFieldEnum)[keyof typeof SatisfactionFeedbackOrderByRelevanceFieldEnum]


  export const AttendanceEventOrderByRelevanceFieldEnum: {
    workerName: 'workerName',
    note: 'note',
    eventDateFa: 'eventDateFa',
    eventTimeFa: 'eventTimeFa',
    eventMonthFa: 'eventMonthFa'
  };

  export type AttendanceEventOrderByRelevanceFieldEnum = (typeof AttendanceEventOrderByRelevanceFieldEnum)[keyof typeof AttendanceEventOrderByRelevanceFieldEnum]


  export const AttendanceDailySummaryOrderByRelevanceFieldEnum: {
    workerName: 'workerName',
    shiftDate: 'shiftDate',
    shiftDateFa: 'shiftDateFa',
    shiftMonthFa: 'shiftMonthFa',
    lastState: 'lastState',
    notes: 'notes'
  };

  export type AttendanceDailySummaryOrderByRelevanceFieldEnum = (typeof AttendanceDailySummaryOrderByRelevanceFieldEnum)[keyof typeof AttendanceDailySummaryOrderByRelevanceFieldEnum]


  export const RewardLedgerOrderByRelevanceFieldEnum: {
    workerName: 'workerName',
    shiftDate: 'shiftDate',
    shiftDateFa: 'shiftDateFa',
    type: 'type',
    reason: 'reason'
  };

  export type RewardLedgerOrderByRelevanceFieldEnum = (typeof RewardLedgerOrderByRelevanceFieldEnum)[keyof typeof RewardLedgerOrderByRelevanceFieldEnum]


  export const WorkTaskOrderByRelevanceFieldEnum: {
    id: 'id',
    rollerId: 'rollerId',
    stage: 'stage',
    worker: 'worker',
    blockedReason: 'blockedReason'
  };

  export type WorkTaskOrderByRelevanceFieldEnum = (typeof WorkTaskOrderByRelevanceFieldEnum)[keyof typeof WorkTaskOrderByRelevanceFieldEnum]


  export const IssueReportOrderByRelevanceFieldEnum: {
    rollerId: 'rollerId',
    taskId: 'taskId',
    stage: 'stage',
    description: 'description',
    status: 'status'
  };

  export type IssueReportOrderByRelevanceFieldEnum = (typeof IssueReportOrderByRelevanceFieldEnum)[keyof typeof IssueReportOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RollerOrderByRelevanceFieldEnum: {
    id: 'id',
    orderCode: 'orderCode',
    stage: 'stage',
    status: 'status',
    shipmentNote: 'shipmentNote',
    material: 'material'
  };

  export type RollerOrderByRelevanceFieldEnum = (typeof RollerOrderByRelevanceFieldEnum)[keyof typeof RollerOrderByRelevanceFieldEnum]


  export const SystemNotificationOrderByRelevanceFieldEnum: {
    title: 'title',
    message: 'message',
    targetRole: 'targetRole',
    sourceType: 'sourceType',
    sourceId: 'sourceId'
  };

  export type SystemNotificationOrderByRelevanceFieldEnum = (typeof SystemNotificationOrderByRelevanceFieldEnum)[keyof typeof SystemNotificationOrderByRelevanceFieldEnum]


  export const ReferralOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    targetRole: 'targetRole',
    sourceRole: 'sourceRole',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    orderCode: 'orderCode',
    rollerId: 'rollerId',
    taskId: 'taskId',
    status: 'status',
    priority: 'priority'
  };

  export type ReferralOrderByRelevanceFieldEnum = (typeof ReferralOrderByRelevanceFieldEnum)[keyof typeof ReferralOrderByRelevanceFieldEnum]


  export const ReferralMessageOrderByRelevanceFieldEnum: {
    authorRole: 'authorRole',
    authorName: 'authorName',
    message: 'message'
  };

  export type ReferralMessageOrderByRelevanceFieldEnum = (typeof ReferralMessageOrderByRelevanceFieldEnum)[keyof typeof ReferralMessageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SettlementType'
   */
  export type EnumSettlementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementType'>
    


  /**
   * Reference to a field of type 'AttendanceType'
   */
  export type EnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type HealthCheckWhereInput = {
    AND?: HealthCheckWhereInput | HealthCheckWhereInput[]
    OR?: HealthCheckWhereInput[]
    NOT?: HealthCheckWhereInput | HealthCheckWhereInput[]
    id?: IntFilter<"HealthCheck"> | number
    label?: StringFilter<"HealthCheck"> | string
    createdAt?: DateTimeFilter<"HealthCheck"> | Date | string
  }

  export type HealthCheckOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    _relevance?: HealthCheckOrderByRelevanceInput
  }

  export type HealthCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealthCheckWhereInput | HealthCheckWhereInput[]
    OR?: HealthCheckWhereInput[]
    NOT?: HealthCheckWhereInput | HealthCheckWhereInput[]
    label?: StringFilter<"HealthCheck"> | string
    createdAt?: DateTimeFilter<"HealthCheck"> | Date | string
  }, "id">

  export type HealthCheckOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    _count?: HealthCheckCountOrderByAggregateInput
    _avg?: HealthCheckAvgOrderByAggregateInput
    _max?: HealthCheckMaxOrderByAggregateInput
    _min?: HealthCheckMinOrderByAggregateInput
    _sum?: HealthCheckSumOrderByAggregateInput
  }

  export type HealthCheckScalarWhereWithAggregatesInput = {
    AND?: HealthCheckScalarWhereWithAggregatesInput | HealthCheckScalarWhereWithAggregatesInput[]
    OR?: HealthCheckScalarWhereWithAggregatesInput[]
    NOT?: HealthCheckScalarWhereWithAggregatesInput | HealthCheckScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealthCheck"> | number
    label?: StringWithAggregatesFilter<"HealthCheck"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HealthCheck"> | Date | string
  }

  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    id?: IntFilter<"AppUser"> | number
    username?: StringFilter<"AppUser"> | string
    passwordHash?: StringFilter<"AppUser"> | string
    fullName?: StringFilter<"AppUser"> | string
    firstName?: StringNullableFilter<"AppUser"> | string | null
    lastName?: StringNullableFilter<"AppUser"> | string | null
    role?: EnumUserRoleFilter<"AppUser"> | $Enums.UserRole
    active?: BoolFilter<"AppUser"> | boolean
    phone?: StringNullableFilter<"AppUser"> | string | null
    baleUserId?: StringNullableFilter<"AppUser"> | string | null
    profileImageUrl?: StringNullableFilter<"AppUser"> | string | null
    notes?: StringNullableFilter<"AppUser"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    skills?: WorkerSkillListRelationFilter
    pickedTasks?: WorkTaskListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    phone?: SortOrderInput | SortOrder
    baleUserId?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: WorkerSkillOrderByRelationAggregateInput
    pickedTasks?: WorkTaskOrderByRelationAggregateInput
    _relevance?: AppUserOrderByRelevanceInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    passwordHash?: StringFilter<"AppUser"> | string
    fullName?: StringFilter<"AppUser"> | string
    firstName?: StringNullableFilter<"AppUser"> | string | null
    lastName?: StringNullableFilter<"AppUser"> | string | null
    role?: EnumUserRoleFilter<"AppUser"> | $Enums.UserRole
    active?: BoolFilter<"AppUser"> | boolean
    phone?: StringNullableFilter<"AppUser"> | string | null
    baleUserId?: StringNullableFilter<"AppUser"> | string | null
    profileImageUrl?: StringNullableFilter<"AppUser"> | string | null
    notes?: StringNullableFilter<"AppUser"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    skills?: WorkerSkillListRelationFilter
    pickedTasks?: WorkTaskListRelationFilter
  }, "id" | "username">

  export type AppUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    phone?: SortOrderInput | SortOrder
    baleUserId?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _avg?: AppUserAvgOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
    _sum?: AppUserSumOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppUser"> | number
    username?: StringWithAggregatesFilter<"AppUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AppUser"> | string
    fullName?: StringWithAggregatesFilter<"AppUser"> | string
    firstName?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"AppUser"> | $Enums.UserRole
    active?: BoolWithAggregatesFilter<"AppUser"> | boolean
    phone?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    baleUserId?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    notes?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"AppUser"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
  }

  export type WorkerSkillWhereInput = {
    AND?: WorkerSkillWhereInput | WorkerSkillWhereInput[]
    OR?: WorkerSkillWhereInput[]
    NOT?: WorkerSkillWhereInput | WorkerSkillWhereInput[]
    id?: IntFilter<"WorkerSkill"> | number
    userId?: IntFilter<"WorkerSkill"> | number
    stage?: StringFilter<"WorkerSkill"> | string
    createdAt?: DateTimeFilter<"WorkerSkill"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }

  export type WorkerSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    createdAt?: SortOrder
    user?: AppUserOrderByWithRelationInput
    _relevance?: WorkerSkillOrderByRelevanceInput
  }

  export type WorkerSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_stage?: WorkerSkillUserIdStageCompoundUniqueInput
    AND?: WorkerSkillWhereInput | WorkerSkillWhereInput[]
    OR?: WorkerSkillWhereInput[]
    NOT?: WorkerSkillWhereInput | WorkerSkillWhereInput[]
    userId?: IntFilter<"WorkerSkill"> | number
    stage?: StringFilter<"WorkerSkill"> | string
    createdAt?: DateTimeFilter<"WorkerSkill"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }, "id" | "userId_stage">

  export type WorkerSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    createdAt?: SortOrder
    _count?: WorkerSkillCountOrderByAggregateInput
    _avg?: WorkerSkillAvgOrderByAggregateInput
    _max?: WorkerSkillMaxOrderByAggregateInput
    _min?: WorkerSkillMinOrderByAggregateInput
    _sum?: WorkerSkillSumOrderByAggregateInput
  }

  export type WorkerSkillScalarWhereWithAggregatesInput = {
    AND?: WorkerSkillScalarWhereWithAggregatesInput | WorkerSkillScalarWhereWithAggregatesInput[]
    OR?: WorkerSkillScalarWhereWithAggregatesInput[]
    NOT?: WorkerSkillScalarWhereWithAggregatesInput | WorkerSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkerSkill"> | number
    userId?: IntWithAggregatesFilter<"WorkerSkill"> | number
    stage?: StringWithAggregatesFilter<"WorkerSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkerSkill"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    code?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: WorkshopOrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: WorkshopOrderOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: WorkshopOrderListRelationFilter
  }, "id" | "code">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    code?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type WorkshopOrderWhereInput = {
    AND?: WorkshopOrderWhereInput | WorkshopOrderWhereInput[]
    OR?: WorkshopOrderWhereInput[]
    NOT?: WorkshopOrderWhereInput | WorkshopOrderWhereInput[]
    id?: IntFilter<"WorkshopOrder"> | number
    code?: StringFilter<"WorkshopOrder"> | string
    customerId?: IntFilter<"WorkshopOrder"> | number
    settlementType?: EnumSettlementTypeFilter<"WorkshopOrder"> | $Enums.SettlementType
    status?: StringFilter<"WorkshopOrder"> | string
    satisfactionStatus?: StringFilter<"WorkshopOrder"> | string
    notes?: StringNullableFilter<"WorkshopOrder"> | string | null
    productionStartedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    productionFinishedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    satisfactionDueAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkshopOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkshopOrder"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    rollers?: RollerListRelationFilter
    satisfactionFeedbacks?: SatisfactionFeedbackListRelationFilter
  }

  export type WorkshopOrderOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    customerId?: SortOrder
    settlementType?: SortOrder
    status?: SortOrder
    satisfactionStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    productionStartedAt?: SortOrderInput | SortOrder
    productionFinishedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    satisfactionDueAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    rollers?: RollerOrderByRelationAggregateInput
    satisfactionFeedbacks?: SatisfactionFeedbackOrderByRelationAggregateInput
    _relevance?: WorkshopOrderOrderByRelevanceInput
  }

  export type WorkshopOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: WorkshopOrderWhereInput | WorkshopOrderWhereInput[]
    OR?: WorkshopOrderWhereInput[]
    NOT?: WorkshopOrderWhereInput | WorkshopOrderWhereInput[]
    customerId?: IntFilter<"WorkshopOrder"> | number
    settlementType?: EnumSettlementTypeFilter<"WorkshopOrder"> | $Enums.SettlementType
    status?: StringFilter<"WorkshopOrder"> | string
    satisfactionStatus?: StringFilter<"WorkshopOrder"> | string
    notes?: StringNullableFilter<"WorkshopOrder"> | string | null
    productionStartedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    productionFinishedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    satisfactionDueAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkshopOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkshopOrder"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    rollers?: RollerListRelationFilter
    satisfactionFeedbacks?: SatisfactionFeedbackListRelationFilter
  }, "id" | "code">

  export type WorkshopOrderOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    customerId?: SortOrder
    settlementType?: SortOrder
    status?: SortOrder
    satisfactionStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    productionStartedAt?: SortOrderInput | SortOrder
    productionFinishedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    satisfactionDueAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkshopOrderCountOrderByAggregateInput
    _avg?: WorkshopOrderAvgOrderByAggregateInput
    _max?: WorkshopOrderMaxOrderByAggregateInput
    _min?: WorkshopOrderMinOrderByAggregateInput
    _sum?: WorkshopOrderSumOrderByAggregateInput
  }

  export type WorkshopOrderScalarWhereWithAggregatesInput = {
    AND?: WorkshopOrderScalarWhereWithAggregatesInput | WorkshopOrderScalarWhereWithAggregatesInput[]
    OR?: WorkshopOrderScalarWhereWithAggregatesInput[]
    NOT?: WorkshopOrderScalarWhereWithAggregatesInput | WorkshopOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkshopOrder"> | number
    code?: StringWithAggregatesFilter<"WorkshopOrder"> | string
    customerId?: IntWithAggregatesFilter<"WorkshopOrder"> | number
    settlementType?: EnumSettlementTypeWithAggregatesFilter<"WorkshopOrder"> | $Enums.SettlementType
    status?: StringWithAggregatesFilter<"WorkshopOrder"> | string
    satisfactionStatus?: StringWithAggregatesFilter<"WorkshopOrder"> | string
    notes?: StringNullableWithAggregatesFilter<"WorkshopOrder"> | string | null
    productionStartedAt?: DateTimeNullableWithAggregatesFilter<"WorkshopOrder"> | Date | string | null
    productionFinishedAt?: DateTimeNullableWithAggregatesFilter<"WorkshopOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"WorkshopOrder"> | Date | string | null
    satisfactionDueAt?: DateTimeNullableWithAggregatesFilter<"WorkshopOrder"> | Date | string | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"WorkshopOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkshopOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkshopOrder"> | Date | string
  }

  export type SatisfactionFeedbackWhereInput = {
    AND?: SatisfactionFeedbackWhereInput | SatisfactionFeedbackWhereInput[]
    OR?: SatisfactionFeedbackWhereInput[]
    NOT?: SatisfactionFeedbackWhereInput | SatisfactionFeedbackWhereInput[]
    id?: IntFilter<"SatisfactionFeedback"> | number
    orderId?: IntFilter<"SatisfactionFeedback"> | number
    result?: StringFilter<"SatisfactionFeedback"> | string
    reason?: StringNullableFilter<"SatisfactionFeedback"> | string | null
    createdAt?: DateTimeFilter<"SatisfactionFeedback"> | Date | string
    order?: XOR<WorkshopOrderScalarRelationFilter, WorkshopOrderWhereInput>
  }

  export type SatisfactionFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    result?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: WorkshopOrderOrderByWithRelationInput
    _relevance?: SatisfactionFeedbackOrderByRelevanceInput
  }

  export type SatisfactionFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SatisfactionFeedbackWhereInput | SatisfactionFeedbackWhereInput[]
    OR?: SatisfactionFeedbackWhereInput[]
    NOT?: SatisfactionFeedbackWhereInput | SatisfactionFeedbackWhereInput[]
    orderId?: IntFilter<"SatisfactionFeedback"> | number
    result?: StringFilter<"SatisfactionFeedback"> | string
    reason?: StringNullableFilter<"SatisfactionFeedback"> | string | null
    createdAt?: DateTimeFilter<"SatisfactionFeedback"> | Date | string
    order?: XOR<WorkshopOrderScalarRelationFilter, WorkshopOrderWhereInput>
  }, "id">

  export type SatisfactionFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    result?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SatisfactionFeedbackCountOrderByAggregateInput
    _avg?: SatisfactionFeedbackAvgOrderByAggregateInput
    _max?: SatisfactionFeedbackMaxOrderByAggregateInput
    _min?: SatisfactionFeedbackMinOrderByAggregateInput
    _sum?: SatisfactionFeedbackSumOrderByAggregateInput
  }

  export type SatisfactionFeedbackScalarWhereWithAggregatesInput = {
    AND?: SatisfactionFeedbackScalarWhereWithAggregatesInput | SatisfactionFeedbackScalarWhereWithAggregatesInput[]
    OR?: SatisfactionFeedbackScalarWhereWithAggregatesInput[]
    NOT?: SatisfactionFeedbackScalarWhereWithAggregatesInput | SatisfactionFeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SatisfactionFeedback"> | number
    orderId?: IntWithAggregatesFilter<"SatisfactionFeedback"> | number
    result?: StringWithAggregatesFilter<"SatisfactionFeedback"> | string
    reason?: StringNullableWithAggregatesFilter<"SatisfactionFeedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SatisfactionFeedback"> | Date | string
  }

  export type AttendanceEventWhereInput = {
    AND?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    OR?: AttendanceEventWhereInput[]
    NOT?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    id?: IntFilter<"AttendanceEvent"> | number
    userId?: IntNullableFilter<"AttendanceEvent"> | number | null
    workerName?: StringFilter<"AttendanceEvent"> | string
    type?: EnumAttendanceTypeFilter<"AttendanceEvent"> | $Enums.AttendanceType
    note?: StringNullableFilter<"AttendanceEvent"> | string | null
    eventAt?: DateTimeFilter<"AttendanceEvent"> | Date | string
    eventDateFa?: StringFilter<"AttendanceEvent"> | string
    eventTimeFa?: StringFilter<"AttendanceEvent"> | string
    eventMonthFa?: StringFilter<"AttendanceEvent"> | string
    createdAt?: DateTimeFilter<"AttendanceEvent"> | Date | string
  }

  export type AttendanceEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    workerName?: SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    eventAt?: SortOrder
    eventDateFa?: SortOrder
    eventTimeFa?: SortOrder
    eventMonthFa?: SortOrder
    createdAt?: SortOrder
    _relevance?: AttendanceEventOrderByRelevanceInput
  }

  export type AttendanceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    OR?: AttendanceEventWhereInput[]
    NOT?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    userId?: IntNullableFilter<"AttendanceEvent"> | number | null
    workerName?: StringFilter<"AttendanceEvent"> | string
    type?: EnumAttendanceTypeFilter<"AttendanceEvent"> | $Enums.AttendanceType
    note?: StringNullableFilter<"AttendanceEvent"> | string | null
    eventAt?: DateTimeFilter<"AttendanceEvent"> | Date | string
    eventDateFa?: StringFilter<"AttendanceEvent"> | string
    eventTimeFa?: StringFilter<"AttendanceEvent"> | string
    eventMonthFa?: StringFilter<"AttendanceEvent"> | string
    createdAt?: DateTimeFilter<"AttendanceEvent"> | Date | string
  }, "id">

  export type AttendanceEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    workerName?: SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    eventAt?: SortOrder
    eventDateFa?: SortOrder
    eventTimeFa?: SortOrder
    eventMonthFa?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceEventCountOrderByAggregateInput
    _avg?: AttendanceEventAvgOrderByAggregateInput
    _max?: AttendanceEventMaxOrderByAggregateInput
    _min?: AttendanceEventMinOrderByAggregateInput
    _sum?: AttendanceEventSumOrderByAggregateInput
  }

  export type AttendanceEventScalarWhereWithAggregatesInput = {
    AND?: AttendanceEventScalarWhereWithAggregatesInput | AttendanceEventScalarWhereWithAggregatesInput[]
    OR?: AttendanceEventScalarWhereWithAggregatesInput[]
    NOT?: AttendanceEventScalarWhereWithAggregatesInput | AttendanceEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceEvent"> | number
    userId?: IntNullableWithAggregatesFilter<"AttendanceEvent"> | number | null
    workerName?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    type?: EnumAttendanceTypeWithAggregatesFilter<"AttendanceEvent"> | $Enums.AttendanceType
    note?: StringNullableWithAggregatesFilter<"AttendanceEvent"> | string | null
    eventAt?: DateTimeWithAggregatesFilter<"AttendanceEvent"> | Date | string
    eventDateFa?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    eventTimeFa?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    eventMonthFa?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceEvent"> | Date | string
  }

  export type AttendanceDailySummaryWhereInput = {
    AND?: AttendanceDailySummaryWhereInput | AttendanceDailySummaryWhereInput[]
    OR?: AttendanceDailySummaryWhereInput[]
    NOT?: AttendanceDailySummaryWhereInput | AttendanceDailySummaryWhereInput[]
    id?: IntFilter<"AttendanceDailySummary"> | number
    userId?: IntNullableFilter<"AttendanceDailySummary"> | number | null
    workerName?: StringFilter<"AttendanceDailySummary"> | string
    shiftDate?: StringFilter<"AttendanceDailySummary"> | string
    shiftDateFa?: StringFilter<"AttendanceDailySummary"> | string
    shiftMonthFa?: StringFilter<"AttendanceDailySummary"> | string
    checkInAt?: DateTimeNullableFilter<"AttendanceDailySummary"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"AttendanceDailySummary"> | Date | string | null
    lastState?: StringFilter<"AttendanceDailySummary"> | string
    earlyArrivalReward?: BoolFilter<"AttendanceDailySummary"> | boolean
    endOfDayReward?: BoolFilter<"AttendanceDailySummary"> | boolean
    overtimeMinutes?: IntFilter<"AttendanceDailySummary"> | number
    tempExitCount?: IntFilter<"AttendanceDailySummary"> | number
    totalRewardAmount?: IntFilter<"AttendanceDailySummary"> | number
    notes?: StringNullableFilter<"AttendanceDailySummary"> | string | null
    createdAt?: DateTimeFilter<"AttendanceDailySummary"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceDailySummary"> | Date | string
  }

  export type AttendanceDailySummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    shiftMonthFa?: SortOrder
    checkInAt?: SortOrderInput | SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    lastState?: SortOrder
    earlyArrivalReward?: SortOrder
    endOfDayReward?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AttendanceDailySummaryOrderByRelevanceInput
  }

  export type AttendanceDailySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workerName_shiftDate?: AttendanceDailySummaryWorkerNameShiftDateCompoundUniqueInput
    AND?: AttendanceDailySummaryWhereInput | AttendanceDailySummaryWhereInput[]
    OR?: AttendanceDailySummaryWhereInput[]
    NOT?: AttendanceDailySummaryWhereInput | AttendanceDailySummaryWhereInput[]
    userId?: IntNullableFilter<"AttendanceDailySummary"> | number | null
    workerName?: StringFilter<"AttendanceDailySummary"> | string
    shiftDate?: StringFilter<"AttendanceDailySummary"> | string
    shiftDateFa?: StringFilter<"AttendanceDailySummary"> | string
    shiftMonthFa?: StringFilter<"AttendanceDailySummary"> | string
    checkInAt?: DateTimeNullableFilter<"AttendanceDailySummary"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"AttendanceDailySummary"> | Date | string | null
    lastState?: StringFilter<"AttendanceDailySummary"> | string
    earlyArrivalReward?: BoolFilter<"AttendanceDailySummary"> | boolean
    endOfDayReward?: BoolFilter<"AttendanceDailySummary"> | boolean
    overtimeMinutes?: IntFilter<"AttendanceDailySummary"> | number
    tempExitCount?: IntFilter<"AttendanceDailySummary"> | number
    totalRewardAmount?: IntFilter<"AttendanceDailySummary"> | number
    notes?: StringNullableFilter<"AttendanceDailySummary"> | string | null
    createdAt?: DateTimeFilter<"AttendanceDailySummary"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceDailySummary"> | Date | string
  }, "id" | "workerName_shiftDate">

  export type AttendanceDailySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    shiftMonthFa?: SortOrder
    checkInAt?: SortOrderInput | SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    lastState?: SortOrder
    earlyArrivalReward?: SortOrder
    endOfDayReward?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceDailySummaryCountOrderByAggregateInput
    _avg?: AttendanceDailySummaryAvgOrderByAggregateInput
    _max?: AttendanceDailySummaryMaxOrderByAggregateInput
    _min?: AttendanceDailySummaryMinOrderByAggregateInput
    _sum?: AttendanceDailySummarySumOrderByAggregateInput
  }

  export type AttendanceDailySummaryScalarWhereWithAggregatesInput = {
    AND?: AttendanceDailySummaryScalarWhereWithAggregatesInput | AttendanceDailySummaryScalarWhereWithAggregatesInput[]
    OR?: AttendanceDailySummaryScalarWhereWithAggregatesInput[]
    NOT?: AttendanceDailySummaryScalarWhereWithAggregatesInput | AttendanceDailySummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceDailySummary"> | number
    userId?: IntNullableWithAggregatesFilter<"AttendanceDailySummary"> | number | null
    workerName?: StringWithAggregatesFilter<"AttendanceDailySummary"> | string
    shiftDate?: StringWithAggregatesFilter<"AttendanceDailySummary"> | string
    shiftDateFa?: StringWithAggregatesFilter<"AttendanceDailySummary"> | string
    shiftMonthFa?: StringWithAggregatesFilter<"AttendanceDailySummary"> | string
    checkInAt?: DateTimeNullableWithAggregatesFilter<"AttendanceDailySummary"> | Date | string | null
    checkOutAt?: DateTimeNullableWithAggregatesFilter<"AttendanceDailySummary"> | Date | string | null
    lastState?: StringWithAggregatesFilter<"AttendanceDailySummary"> | string
    earlyArrivalReward?: BoolWithAggregatesFilter<"AttendanceDailySummary"> | boolean
    endOfDayReward?: BoolWithAggregatesFilter<"AttendanceDailySummary"> | boolean
    overtimeMinutes?: IntWithAggregatesFilter<"AttendanceDailySummary"> | number
    tempExitCount?: IntWithAggregatesFilter<"AttendanceDailySummary"> | number
    totalRewardAmount?: IntWithAggregatesFilter<"AttendanceDailySummary"> | number
    notes?: StringNullableWithAggregatesFilter<"AttendanceDailySummary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceDailySummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceDailySummary"> | Date | string
  }

  export type RewardLedgerWhereInput = {
    AND?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    OR?: RewardLedgerWhereInput[]
    NOT?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    id?: IntFilter<"RewardLedger"> | number
    userId?: IntNullableFilter<"RewardLedger"> | number | null
    workerName?: StringFilter<"RewardLedger"> | string
    shiftDate?: StringFilter<"RewardLedger"> | string
    shiftDateFa?: StringFilter<"RewardLedger"> | string
    type?: StringFilter<"RewardLedger"> | string
    amount?: IntFilter<"RewardLedger"> | number
    reason?: StringFilter<"RewardLedger"> | string
    createdAt?: DateTimeFilter<"RewardLedger"> | Date | string
  }

  export type RewardLedgerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _relevance?: RewardLedgerOrderByRelevanceInput
  }

  export type RewardLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workerName_shiftDate_type?: RewardLedgerWorkerNameShiftDateTypeCompoundUniqueInput
    AND?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    OR?: RewardLedgerWhereInput[]
    NOT?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    userId?: IntNullableFilter<"RewardLedger"> | number | null
    workerName?: StringFilter<"RewardLedger"> | string
    shiftDate?: StringFilter<"RewardLedger"> | string
    shiftDateFa?: StringFilter<"RewardLedger"> | string
    type?: StringFilter<"RewardLedger"> | string
    amount?: IntFilter<"RewardLedger"> | number
    reason?: StringFilter<"RewardLedger"> | string
    createdAt?: DateTimeFilter<"RewardLedger"> | Date | string
  }, "id" | "workerName_shiftDate_type">

  export type RewardLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: RewardLedgerCountOrderByAggregateInput
    _avg?: RewardLedgerAvgOrderByAggregateInput
    _max?: RewardLedgerMaxOrderByAggregateInput
    _min?: RewardLedgerMinOrderByAggregateInput
    _sum?: RewardLedgerSumOrderByAggregateInput
  }

  export type RewardLedgerScalarWhereWithAggregatesInput = {
    AND?: RewardLedgerScalarWhereWithAggregatesInput | RewardLedgerScalarWhereWithAggregatesInput[]
    OR?: RewardLedgerScalarWhereWithAggregatesInput[]
    NOT?: RewardLedgerScalarWhereWithAggregatesInput | RewardLedgerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RewardLedger"> | number
    userId?: IntNullableWithAggregatesFilter<"RewardLedger"> | number | null
    workerName?: StringWithAggregatesFilter<"RewardLedger"> | string
    shiftDate?: StringWithAggregatesFilter<"RewardLedger"> | string
    shiftDateFa?: StringWithAggregatesFilter<"RewardLedger"> | string
    type?: StringWithAggregatesFilter<"RewardLedger"> | string
    amount?: IntWithAggregatesFilter<"RewardLedger"> | number
    reason?: StringWithAggregatesFilter<"RewardLedger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RewardLedger"> | Date | string
  }

  export type WorkTaskWhereInput = {
    AND?: WorkTaskWhereInput | WorkTaskWhereInput[]
    OR?: WorkTaskWhereInput[]
    NOT?: WorkTaskWhereInput | WorkTaskWhereInput[]
    id?: StringFilter<"WorkTask"> | string
    rollerId?: StringFilter<"WorkTask"> | string
    sequence?: IntFilter<"WorkTask"> | number
    stage?: StringFilter<"WorkTask"> | string
    status?: EnumTaskStatusFilter<"WorkTask"> | $Enums.TaskStatus
    worker?: StringNullableFilter<"WorkTask"> | string | null
    pickedByUserId?: IntNullableFilter<"WorkTask"> | number | null
    availableAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    blockedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    blockedReason?: StringNullableFilter<"WorkTask"> | string | null
    estimatedDays?: IntFilter<"WorkTask"> | number
    dueAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    completedEarly?: BoolFilter<"WorkTask"> | boolean
    delayed?: BoolFilter<"WorkTask"> | boolean
    delayNotified?: BoolFilter<"WorkTask"> | boolean
    delayDetectedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    updatedAt?: DateTimeFilter<"WorkTask"> | Date | string
    createdAt?: DateTimeFilter<"WorkTask"> | Date | string
    roller?: XOR<RollerScalarRelationFilter, RollerWhereInput>
    pickedByUser?: XOR<AppUserNullableScalarRelationFilter, AppUserWhereInput> | null
  }

  export type WorkTaskOrderByWithRelationInput = {
    id?: SortOrder
    rollerId?: SortOrder
    sequence?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    worker?: SortOrderInput | SortOrder
    pickedByUserId?: SortOrderInput | SortOrder
    availableAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    blockedAt?: SortOrderInput | SortOrder
    blockedReason?: SortOrderInput | SortOrder
    estimatedDays?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    completedEarly?: SortOrder
    delayed?: SortOrder
    delayNotified?: SortOrder
    delayDetectedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    roller?: RollerOrderByWithRelationInput
    pickedByUser?: AppUserOrderByWithRelationInput
    _relevance?: WorkTaskOrderByRelevanceInput
  }

  export type WorkTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkTaskWhereInput | WorkTaskWhereInput[]
    OR?: WorkTaskWhereInput[]
    NOT?: WorkTaskWhereInput | WorkTaskWhereInput[]
    rollerId?: StringFilter<"WorkTask"> | string
    sequence?: IntFilter<"WorkTask"> | number
    stage?: StringFilter<"WorkTask"> | string
    status?: EnumTaskStatusFilter<"WorkTask"> | $Enums.TaskStatus
    worker?: StringNullableFilter<"WorkTask"> | string | null
    pickedByUserId?: IntNullableFilter<"WorkTask"> | number | null
    availableAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    blockedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    blockedReason?: StringNullableFilter<"WorkTask"> | string | null
    estimatedDays?: IntFilter<"WorkTask"> | number
    dueAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    completedEarly?: BoolFilter<"WorkTask"> | boolean
    delayed?: BoolFilter<"WorkTask"> | boolean
    delayNotified?: BoolFilter<"WorkTask"> | boolean
    delayDetectedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    updatedAt?: DateTimeFilter<"WorkTask"> | Date | string
    createdAt?: DateTimeFilter<"WorkTask"> | Date | string
    roller?: XOR<RollerScalarRelationFilter, RollerWhereInput>
    pickedByUser?: XOR<AppUserNullableScalarRelationFilter, AppUserWhereInput> | null
  }, "id">

  export type WorkTaskOrderByWithAggregationInput = {
    id?: SortOrder
    rollerId?: SortOrder
    sequence?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    worker?: SortOrderInput | SortOrder
    pickedByUserId?: SortOrderInput | SortOrder
    availableAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    blockedAt?: SortOrderInput | SortOrder
    blockedReason?: SortOrderInput | SortOrder
    estimatedDays?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    completedEarly?: SortOrder
    delayed?: SortOrder
    delayNotified?: SortOrder
    delayDetectedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: WorkTaskCountOrderByAggregateInput
    _avg?: WorkTaskAvgOrderByAggregateInput
    _max?: WorkTaskMaxOrderByAggregateInput
    _min?: WorkTaskMinOrderByAggregateInput
    _sum?: WorkTaskSumOrderByAggregateInput
  }

  export type WorkTaskScalarWhereWithAggregatesInput = {
    AND?: WorkTaskScalarWhereWithAggregatesInput | WorkTaskScalarWhereWithAggregatesInput[]
    OR?: WorkTaskScalarWhereWithAggregatesInput[]
    NOT?: WorkTaskScalarWhereWithAggregatesInput | WorkTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkTask"> | string
    rollerId?: StringWithAggregatesFilter<"WorkTask"> | string
    sequence?: IntWithAggregatesFilter<"WorkTask"> | number
    stage?: StringWithAggregatesFilter<"WorkTask"> | string
    status?: EnumTaskStatusWithAggregatesFilter<"WorkTask"> | $Enums.TaskStatus
    worker?: StringNullableWithAggregatesFilter<"WorkTask"> | string | null
    pickedByUserId?: IntNullableWithAggregatesFilter<"WorkTask"> | number | null
    availableAt?: DateTimeNullableWithAggregatesFilter<"WorkTask"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"WorkTask"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"WorkTask"> | Date | string | null
    blockedAt?: DateTimeNullableWithAggregatesFilter<"WorkTask"> | Date | string | null
    blockedReason?: StringNullableWithAggregatesFilter<"WorkTask"> | string | null
    estimatedDays?: IntWithAggregatesFilter<"WorkTask"> | number
    dueAt?: DateTimeNullableWithAggregatesFilter<"WorkTask"> | Date | string | null
    completedEarly?: BoolWithAggregatesFilter<"WorkTask"> | boolean
    delayed?: BoolWithAggregatesFilter<"WorkTask"> | boolean
    delayNotified?: BoolWithAggregatesFilter<"WorkTask"> | boolean
    delayDetectedAt?: DateTimeNullableWithAggregatesFilter<"WorkTask"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"WorkTask"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkTask"> | Date | string
  }

  export type IssueReportWhereInput = {
    AND?: IssueReportWhereInput | IssueReportWhereInput[]
    OR?: IssueReportWhereInput[]
    NOT?: IssueReportWhereInput | IssueReportWhereInput[]
    id?: IntFilter<"IssueReport"> | number
    rollerId?: StringFilter<"IssueReport"> | string
    taskId?: StringNullableFilter<"IssueReport"> | string | null
    stage?: StringFilter<"IssueReport"> | string
    description?: StringFilter<"IssueReport"> | string
    status?: StringFilter<"IssueReport"> | string
    createdAt?: DateTimeFilter<"IssueReport"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"IssueReport"> | Date | string | null
  }

  export type IssueReportOrderByWithRelationInput = {
    id?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    stage?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _relevance?: IssueReportOrderByRelevanceInput
  }

  export type IssueReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueReportWhereInput | IssueReportWhereInput[]
    OR?: IssueReportWhereInput[]
    NOT?: IssueReportWhereInput | IssueReportWhereInput[]
    rollerId?: StringFilter<"IssueReport"> | string
    taskId?: StringNullableFilter<"IssueReport"> | string | null
    stage?: StringFilter<"IssueReport"> | string
    description?: StringFilter<"IssueReport"> | string
    status?: StringFilter<"IssueReport"> | string
    createdAt?: DateTimeFilter<"IssueReport"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"IssueReport"> | Date | string | null
  }, "id">

  export type IssueReportOrderByWithAggregationInput = {
    id?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    stage?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: IssueReportCountOrderByAggregateInput
    _avg?: IssueReportAvgOrderByAggregateInput
    _max?: IssueReportMaxOrderByAggregateInput
    _min?: IssueReportMinOrderByAggregateInput
    _sum?: IssueReportSumOrderByAggregateInput
  }

  export type IssueReportScalarWhereWithAggregatesInput = {
    AND?: IssueReportScalarWhereWithAggregatesInput | IssueReportScalarWhereWithAggregatesInput[]
    OR?: IssueReportScalarWhereWithAggregatesInput[]
    NOT?: IssueReportScalarWhereWithAggregatesInput | IssueReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IssueReport"> | number
    rollerId?: StringWithAggregatesFilter<"IssueReport"> | string
    taskId?: StringNullableWithAggregatesFilter<"IssueReport"> | string | null
    stage?: StringWithAggregatesFilter<"IssueReport"> | string
    description?: StringWithAggregatesFilter<"IssueReport"> | string
    status?: StringWithAggregatesFilter<"IssueReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IssueReport"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"IssueReport"> | Date | string | null
  }

  export type RollerWhereInput = {
    AND?: RollerWhereInput | RollerWhereInput[]
    OR?: RollerWhereInput[]
    NOT?: RollerWhereInput | RollerWhereInput[]
    id?: StringFilter<"Roller"> | string
    orderCode?: StringFilter<"Roller"> | string
    workshopOrderId?: IntNullableFilter<"Roller"> | number | null
    stage?: StringFilter<"Roller"> | string
    status?: StringFilter<"Roller"> | string
    ready?: BoolFilter<"Roller"> | boolean
    settled?: BoolFilter<"Roller"> | boolean
    sent?: BoolFilter<"Roller"> | boolean
    settlementRecordedAt?: DateTimeNullableFilter<"Roller"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Roller"> | Date | string | null
    shipmentNote?: StringNullableFilter<"Roller"> | string | null
    diameterMm?: FloatNullableFilter<"Roller"> | number | null
    lengthMm?: FloatNullableFilter<"Roller"> | number | null
    material?: StringNullableFilter<"Roller"> | string | null
    thicknessMm?: FloatNullableFilter<"Roller"> | number | null
    requiredStages?: JsonNullableFilter<"Roller">
    updatedAt?: DateTimeFilter<"Roller"> | Date | string
    createdAt?: DateTimeFilter<"Roller"> | Date | string
    workshopOrder?: XOR<WorkshopOrderNullableScalarRelationFilter, WorkshopOrderWhereInput> | null
    workTasks?: WorkTaskListRelationFilter
  }

  export type RollerOrderByWithRelationInput = {
    id?: SortOrder
    orderCode?: SortOrder
    workshopOrderId?: SortOrderInput | SortOrder
    stage?: SortOrder
    status?: SortOrder
    ready?: SortOrder
    settled?: SortOrder
    sent?: SortOrder
    settlementRecordedAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    shipmentNote?: SortOrderInput | SortOrder
    diameterMm?: SortOrderInput | SortOrder
    lengthMm?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    thicknessMm?: SortOrderInput | SortOrder
    requiredStages?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    workshopOrder?: WorkshopOrderOrderByWithRelationInput
    workTasks?: WorkTaskOrderByRelationAggregateInput
    _relevance?: RollerOrderByRelevanceInput
  }

  export type RollerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RollerWhereInput | RollerWhereInput[]
    OR?: RollerWhereInput[]
    NOT?: RollerWhereInput | RollerWhereInput[]
    orderCode?: StringFilter<"Roller"> | string
    workshopOrderId?: IntNullableFilter<"Roller"> | number | null
    stage?: StringFilter<"Roller"> | string
    status?: StringFilter<"Roller"> | string
    ready?: BoolFilter<"Roller"> | boolean
    settled?: BoolFilter<"Roller"> | boolean
    sent?: BoolFilter<"Roller"> | boolean
    settlementRecordedAt?: DateTimeNullableFilter<"Roller"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Roller"> | Date | string | null
    shipmentNote?: StringNullableFilter<"Roller"> | string | null
    diameterMm?: FloatNullableFilter<"Roller"> | number | null
    lengthMm?: FloatNullableFilter<"Roller"> | number | null
    material?: StringNullableFilter<"Roller"> | string | null
    thicknessMm?: FloatNullableFilter<"Roller"> | number | null
    requiredStages?: JsonNullableFilter<"Roller">
    updatedAt?: DateTimeFilter<"Roller"> | Date | string
    createdAt?: DateTimeFilter<"Roller"> | Date | string
    workshopOrder?: XOR<WorkshopOrderNullableScalarRelationFilter, WorkshopOrderWhereInput> | null
    workTasks?: WorkTaskListRelationFilter
  }, "id">

  export type RollerOrderByWithAggregationInput = {
    id?: SortOrder
    orderCode?: SortOrder
    workshopOrderId?: SortOrderInput | SortOrder
    stage?: SortOrder
    status?: SortOrder
    ready?: SortOrder
    settled?: SortOrder
    sent?: SortOrder
    settlementRecordedAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    shipmentNote?: SortOrderInput | SortOrder
    diameterMm?: SortOrderInput | SortOrder
    lengthMm?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    thicknessMm?: SortOrderInput | SortOrder
    requiredStages?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: RollerCountOrderByAggregateInput
    _avg?: RollerAvgOrderByAggregateInput
    _max?: RollerMaxOrderByAggregateInput
    _min?: RollerMinOrderByAggregateInput
    _sum?: RollerSumOrderByAggregateInput
  }

  export type RollerScalarWhereWithAggregatesInput = {
    AND?: RollerScalarWhereWithAggregatesInput | RollerScalarWhereWithAggregatesInput[]
    OR?: RollerScalarWhereWithAggregatesInput[]
    NOT?: RollerScalarWhereWithAggregatesInput | RollerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roller"> | string
    orderCode?: StringWithAggregatesFilter<"Roller"> | string
    workshopOrderId?: IntNullableWithAggregatesFilter<"Roller"> | number | null
    stage?: StringWithAggregatesFilter<"Roller"> | string
    status?: StringWithAggregatesFilter<"Roller"> | string
    ready?: BoolWithAggregatesFilter<"Roller"> | boolean
    settled?: BoolWithAggregatesFilter<"Roller"> | boolean
    sent?: BoolWithAggregatesFilter<"Roller"> | boolean
    settlementRecordedAt?: DateTimeNullableWithAggregatesFilter<"Roller"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Roller"> | Date | string | null
    shipmentNote?: StringNullableWithAggregatesFilter<"Roller"> | string | null
    diameterMm?: FloatNullableWithAggregatesFilter<"Roller"> | number | null
    lengthMm?: FloatNullableWithAggregatesFilter<"Roller"> | number | null
    material?: StringNullableWithAggregatesFilter<"Roller"> | string | null
    thicknessMm?: FloatNullableWithAggregatesFilter<"Roller"> | number | null
    requiredStages?: JsonNullableWithAggregatesFilter<"Roller">
    updatedAt?: DateTimeWithAggregatesFilter<"Roller"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Roller"> | Date | string
  }

  export type SystemNotificationWhereInput = {
    AND?: SystemNotificationWhereInput | SystemNotificationWhereInput[]
    OR?: SystemNotificationWhereInput[]
    NOT?: SystemNotificationWhereInput | SystemNotificationWhereInput[]
    id?: IntFilter<"SystemNotification"> | number
    title?: StringFilter<"SystemNotification"> | string
    message?: StringFilter<"SystemNotification"> | string
    targetRole?: StringFilter<"SystemNotification"> | string
    sourceType?: StringNullableFilter<"SystemNotification"> | string | null
    sourceId?: StringNullableFilter<"SystemNotification"> | string | null
    isRead?: BoolFilter<"SystemNotification"> | boolean
    createdAt?: DateTimeFilter<"SystemNotification"> | Date | string
  }

  export type SystemNotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRole?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _relevance?: SystemNotificationOrderByRelevanceInput
  }

  export type SystemNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemNotificationWhereInput | SystemNotificationWhereInput[]
    OR?: SystemNotificationWhereInput[]
    NOT?: SystemNotificationWhereInput | SystemNotificationWhereInput[]
    title?: StringFilter<"SystemNotification"> | string
    message?: StringFilter<"SystemNotification"> | string
    targetRole?: StringFilter<"SystemNotification"> | string
    sourceType?: StringNullableFilter<"SystemNotification"> | string | null
    sourceId?: StringNullableFilter<"SystemNotification"> | string | null
    isRead?: BoolFilter<"SystemNotification"> | boolean
    createdAt?: DateTimeFilter<"SystemNotification"> | Date | string
  }, "id">

  export type SystemNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRole?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: SystemNotificationCountOrderByAggregateInput
    _avg?: SystemNotificationAvgOrderByAggregateInput
    _max?: SystemNotificationMaxOrderByAggregateInput
    _min?: SystemNotificationMinOrderByAggregateInput
    _sum?: SystemNotificationSumOrderByAggregateInput
  }

  export type SystemNotificationScalarWhereWithAggregatesInput = {
    AND?: SystemNotificationScalarWhereWithAggregatesInput | SystemNotificationScalarWhereWithAggregatesInput[]
    OR?: SystemNotificationScalarWhereWithAggregatesInput[]
    NOT?: SystemNotificationScalarWhereWithAggregatesInput | SystemNotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemNotification"> | number
    title?: StringWithAggregatesFilter<"SystemNotification"> | string
    message?: StringWithAggregatesFilter<"SystemNotification"> | string
    targetRole?: StringWithAggregatesFilter<"SystemNotification"> | string
    sourceType?: StringNullableWithAggregatesFilter<"SystemNotification"> | string | null
    sourceId?: StringNullableWithAggregatesFilter<"SystemNotification"> | string | null
    isRead?: BoolWithAggregatesFilter<"SystemNotification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemNotification"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: IntFilter<"Referral"> | number
    title?: StringFilter<"Referral"> | string
    description?: StringFilter<"Referral"> | string
    targetRole?: StringFilter<"Referral"> | string
    sourceRole?: StringFilter<"Referral"> | string
    sourceType?: StringNullableFilter<"Referral"> | string | null
    sourceId?: StringNullableFilter<"Referral"> | string | null
    orderCode?: StringNullableFilter<"Referral"> | string | null
    rollerId?: StringNullableFilter<"Referral"> | string | null
    taskId?: StringNullableFilter<"Referral"> | string | null
    issueId?: IntNullableFilter<"Referral"> | number | null
    status?: StringFilter<"Referral"> | string
    priority?: StringFilter<"Referral"> | string
    completedAt?: DateTimeNullableFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    messages?: ReferralMessageListRelationFilter
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetRole?: SortOrder
    sourceRole?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    orderCode?: SortOrderInput | SortOrder
    rollerId?: SortOrderInput | SortOrder
    taskId?: SortOrderInput | SortOrder
    issueId?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ReferralMessageOrderByRelationAggregateInput
    _relevance?: ReferralOrderByRelevanceInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    title?: StringFilter<"Referral"> | string
    description?: StringFilter<"Referral"> | string
    targetRole?: StringFilter<"Referral"> | string
    sourceRole?: StringFilter<"Referral"> | string
    sourceType?: StringNullableFilter<"Referral"> | string | null
    sourceId?: StringNullableFilter<"Referral"> | string | null
    orderCode?: StringNullableFilter<"Referral"> | string | null
    rollerId?: StringNullableFilter<"Referral"> | string | null
    taskId?: StringNullableFilter<"Referral"> | string | null
    issueId?: IntNullableFilter<"Referral"> | number | null
    status?: StringFilter<"Referral"> | string
    priority?: StringFilter<"Referral"> | string
    completedAt?: DateTimeNullableFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    messages?: ReferralMessageListRelationFilter
  }, "id">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetRole?: SortOrder
    sourceRole?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    orderCode?: SortOrderInput | SortOrder
    rollerId?: SortOrderInput | SortOrder
    taskId?: SortOrderInput | SortOrder
    issueId?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Referral"> | number
    title?: StringWithAggregatesFilter<"Referral"> | string
    description?: StringWithAggregatesFilter<"Referral"> | string
    targetRole?: StringWithAggregatesFilter<"Referral"> | string
    sourceRole?: StringWithAggregatesFilter<"Referral"> | string
    sourceType?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    sourceId?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    orderCode?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    rollerId?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    taskId?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    issueId?: IntNullableWithAggregatesFilter<"Referral"> | number | null
    status?: StringWithAggregatesFilter<"Referral"> | string
    priority?: StringWithAggregatesFilter<"Referral"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type ReferralMessageWhereInput = {
    AND?: ReferralMessageWhereInput | ReferralMessageWhereInput[]
    OR?: ReferralMessageWhereInput[]
    NOT?: ReferralMessageWhereInput | ReferralMessageWhereInput[]
    id?: IntFilter<"ReferralMessage"> | number
    referralId?: IntFilter<"ReferralMessage"> | number
    authorRole?: StringFilter<"ReferralMessage"> | string
    authorName?: StringNullableFilter<"ReferralMessage"> | string | null
    message?: StringFilter<"ReferralMessage"> | string
    createdAt?: DateTimeFilter<"ReferralMessage"> | Date | string
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }

  export type ReferralMessageOrderByWithRelationInput = {
    id?: SortOrder
    referralId?: SortOrder
    authorRole?: SortOrder
    authorName?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    referral?: ReferralOrderByWithRelationInput
    _relevance?: ReferralMessageOrderByRelevanceInput
  }

  export type ReferralMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReferralMessageWhereInput | ReferralMessageWhereInput[]
    OR?: ReferralMessageWhereInput[]
    NOT?: ReferralMessageWhereInput | ReferralMessageWhereInput[]
    referralId?: IntFilter<"ReferralMessage"> | number
    authorRole?: StringFilter<"ReferralMessage"> | string
    authorName?: StringNullableFilter<"ReferralMessage"> | string | null
    message?: StringFilter<"ReferralMessage"> | string
    createdAt?: DateTimeFilter<"ReferralMessage"> | Date | string
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }, "id">

  export type ReferralMessageOrderByWithAggregationInput = {
    id?: SortOrder
    referralId?: SortOrder
    authorRole?: SortOrder
    authorName?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralMessageCountOrderByAggregateInput
    _avg?: ReferralMessageAvgOrderByAggregateInput
    _max?: ReferralMessageMaxOrderByAggregateInput
    _min?: ReferralMessageMinOrderByAggregateInput
    _sum?: ReferralMessageSumOrderByAggregateInput
  }

  export type ReferralMessageScalarWhereWithAggregatesInput = {
    AND?: ReferralMessageScalarWhereWithAggregatesInput | ReferralMessageScalarWhereWithAggregatesInput[]
    OR?: ReferralMessageScalarWhereWithAggregatesInput[]
    NOT?: ReferralMessageScalarWhereWithAggregatesInput | ReferralMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReferralMessage"> | number
    referralId?: IntWithAggregatesFilter<"ReferralMessage"> | number
    authorRole?: StringWithAggregatesFilter<"ReferralMessage"> | string
    authorName?: StringNullableWithAggregatesFilter<"ReferralMessage"> | string | null
    message?: StringWithAggregatesFilter<"ReferralMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReferralMessage"> | Date | string
  }

  export type HealthCheckCreateInput = {
    label: string
    createdAt?: Date | string
  }

  export type HealthCheckUncheckedCreateInput = {
    id?: number
    label: string
    createdAt?: Date | string
  }

  export type HealthCheckUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthCheckUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthCheckCreateManyInput = {
    id?: number
    label: string
    createdAt?: Date | string
  }

  export type HealthCheckUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthCheckUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserCreateInput = {
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: WorkerSkillCreateNestedManyWithoutUserInput
    pickedTasks?: WorkTaskCreateNestedManyWithoutPickedByUserInput
  }

  export type AppUserUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: WorkerSkillUncheckedCreateNestedManyWithoutUserInput
    pickedTasks?: WorkTaskUncheckedCreateNestedManyWithoutPickedByUserInput
  }

  export type AppUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: WorkerSkillUpdateManyWithoutUserNestedInput
    pickedTasks?: WorkTaskUpdateManyWithoutPickedByUserNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: WorkerSkillUncheckedUpdateManyWithoutUserNestedInput
    pickedTasks?: WorkTaskUncheckedUpdateManyWithoutPickedByUserNestedInput
  }

  export type AppUserCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerSkillCreateInput = {
    stage: string
    createdAt?: Date | string
    user: AppUserCreateNestedOneWithoutSkillsInput
  }

  export type WorkerSkillUncheckedCreateInput = {
    id?: number
    userId: number
    stage: string
    createdAt?: Date | string
  }

  export type WorkerSkillUpdateInput = {
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type WorkerSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerSkillCreateManyInput = {
    id?: number
    userId: number
    stage: string
    createdAt?: Date | string
  }

  export type WorkerSkillUpdateManyMutationInput = {
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    code: string
    name: string
    phone?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: WorkshopOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    phone?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: WorkshopOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: WorkshopOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: WorkshopOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    code: string
    name: string
    phone?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopOrderCreateInput = {
    code: string
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    rollers?: RollerCreateNestedManyWithoutWorkshopOrderInput
    satisfactionFeedbacks?: SatisfactionFeedbackCreateNestedManyWithoutOrderInput
  }

  export type WorkshopOrderUncheckedCreateInput = {
    id?: number
    code: string
    customerId: number
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rollers?: RollerUncheckedCreateNestedManyWithoutWorkshopOrderInput
    satisfactionFeedbacks?: SatisfactionFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type WorkshopOrderUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    rollers?: RollerUpdateManyWithoutWorkshopOrderNestedInput
    satisfactionFeedbacks?: SatisfactionFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type WorkshopOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rollers?: RollerUncheckedUpdateManyWithoutWorkshopOrderNestedInput
    satisfactionFeedbacks?: SatisfactionFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type WorkshopOrderCreateManyInput = {
    id?: number
    code: string
    customerId: number
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopOrderUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatisfactionFeedbackCreateInput = {
    result: string
    reason?: string | null
    createdAt?: Date | string
    order: WorkshopOrderCreateNestedOneWithoutSatisfactionFeedbacksInput
  }

  export type SatisfactionFeedbackUncheckedCreateInput = {
    id?: number
    orderId: number
    result: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type SatisfactionFeedbackUpdateInput = {
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: WorkshopOrderUpdateOneRequiredWithoutSatisfactionFeedbacksNestedInput
  }

  export type SatisfactionFeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatisfactionFeedbackCreateManyInput = {
    id?: number
    orderId: number
    result: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type SatisfactionFeedbackUpdateManyMutationInput = {
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatisfactionFeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventCreateInput = {
    userId?: number | null
    workerName: string
    type: $Enums.AttendanceType
    note?: string | null
    eventAt?: Date | string
    eventDateFa: string
    eventTimeFa: string
    eventMonthFa: string
    createdAt?: Date | string
  }

  export type AttendanceEventUncheckedCreateInput = {
    id?: number
    userId?: number | null
    workerName: string
    type: $Enums.AttendanceType
    note?: string | null
    eventAt?: Date | string
    eventDateFa: string
    eventTimeFa: string
    eventMonthFa: string
    createdAt?: Date | string
  }

  export type AttendanceEventUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDateFa?: StringFieldUpdateOperationsInput | string
    eventTimeFa?: StringFieldUpdateOperationsInput | string
    eventMonthFa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDateFa?: StringFieldUpdateOperationsInput | string
    eventTimeFa?: StringFieldUpdateOperationsInput | string
    eventMonthFa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventCreateManyInput = {
    id?: number
    userId?: number | null
    workerName: string
    type: $Enums.AttendanceType
    note?: string | null
    eventAt?: Date | string
    eventDateFa: string
    eventTimeFa: string
    eventMonthFa: string
    createdAt?: Date | string
  }

  export type AttendanceEventUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDateFa?: StringFieldUpdateOperationsInput | string
    eventTimeFa?: StringFieldUpdateOperationsInput | string
    eventMonthFa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDateFa?: StringFieldUpdateOperationsInput | string
    eventTimeFa?: StringFieldUpdateOperationsInput | string
    eventMonthFa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDailySummaryCreateInput = {
    userId?: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    shiftMonthFa: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    lastState?: string
    earlyArrivalReward?: boolean
    endOfDayReward?: boolean
    overtimeMinutes?: number
    tempExitCount?: number
    totalRewardAmount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceDailySummaryUncheckedCreateInput = {
    id?: number
    userId?: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    shiftMonthFa: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    lastState?: string
    earlyArrivalReward?: boolean
    endOfDayReward?: boolean
    overtimeMinutes?: number
    tempExitCount?: number
    totalRewardAmount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceDailySummaryUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    shiftMonthFa?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastState?: StringFieldUpdateOperationsInput | string
    earlyArrivalReward?: BoolFieldUpdateOperationsInput | boolean
    endOfDayReward?: BoolFieldUpdateOperationsInput | boolean
    overtimeMinutes?: IntFieldUpdateOperationsInput | number
    tempExitCount?: IntFieldUpdateOperationsInput | number
    totalRewardAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDailySummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    shiftMonthFa?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastState?: StringFieldUpdateOperationsInput | string
    earlyArrivalReward?: BoolFieldUpdateOperationsInput | boolean
    endOfDayReward?: BoolFieldUpdateOperationsInput | boolean
    overtimeMinutes?: IntFieldUpdateOperationsInput | number
    tempExitCount?: IntFieldUpdateOperationsInput | number
    totalRewardAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDailySummaryCreateManyInput = {
    id?: number
    userId?: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    shiftMonthFa: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    lastState?: string
    earlyArrivalReward?: boolean
    endOfDayReward?: boolean
    overtimeMinutes?: number
    tempExitCount?: number
    totalRewardAmount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceDailySummaryUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    shiftMonthFa?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastState?: StringFieldUpdateOperationsInput | string
    earlyArrivalReward?: BoolFieldUpdateOperationsInput | boolean
    endOfDayReward?: BoolFieldUpdateOperationsInput | boolean
    overtimeMinutes?: IntFieldUpdateOperationsInput | number
    tempExitCount?: IntFieldUpdateOperationsInput | number
    totalRewardAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDailySummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    shiftMonthFa?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastState?: StringFieldUpdateOperationsInput | string
    earlyArrivalReward?: BoolFieldUpdateOperationsInput | boolean
    endOfDayReward?: BoolFieldUpdateOperationsInput | boolean
    overtimeMinutes?: IntFieldUpdateOperationsInput | number
    tempExitCount?: IntFieldUpdateOperationsInput | number
    totalRewardAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerCreateInput = {
    userId?: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    type: string
    amount?: number
    reason: string
    createdAt?: Date | string
  }

  export type RewardLedgerUncheckedCreateInput = {
    id?: number
    userId?: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    type: string
    amount?: number
    reason: string
    createdAt?: Date | string
  }

  export type RewardLedgerUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerCreateManyInput = {
    id?: number
    userId?: number | null
    workerName: string
    shiftDate: string
    shiftDateFa: string
    type: string
    amount?: number
    reason: string
    createdAt?: Date | string
  }

  export type RewardLedgerUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workerName?: StringFieldUpdateOperationsInput | string
    shiftDate?: StringFieldUpdateOperationsInput | string
    shiftDateFa?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskCreateInput = {
    id: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    roller: RollerCreateNestedOneWithoutWorkTasksInput
    pickedByUser?: AppUserCreateNestedOneWithoutPickedTasksInput
  }

  export type WorkTaskUncheckedCreateInput = {
    id: string
    rollerId: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    pickedByUserId?: number | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roller?: RollerUpdateOneRequiredWithoutWorkTasksNestedInput
    pickedByUser?: AppUserUpdateOneWithoutPickedTasksNestedInput
  }

  export type WorkTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollerId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    pickedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskCreateManyInput = {
    id: string
    rollerId: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    pickedByUserId?: number | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollerId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    pickedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportCreateInput = {
    rollerId: string
    taskId?: string | null
    stage: string
    description: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type IssueReportUncheckedCreateInput = {
    id?: number
    rollerId: string
    taskId?: string | null
    stage: string
    description: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type IssueReportUpdateInput = {
    rollerId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssueReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rollerId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssueReportCreateManyInput = {
    id?: number
    rollerId: string
    taskId?: string | null
    stage: string
    description: string
    status?: string
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type IssueReportUpdateManyMutationInput = {
    rollerId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssueReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rollerId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RollerCreateInput = {
    id: string
    orderCode: string
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    workshopOrder?: WorkshopOrderCreateNestedOneWithoutRollersInput
    workTasks?: WorkTaskCreateNestedManyWithoutRollerInput
  }

  export type RollerUncheckedCreateInput = {
    id: string
    orderCode: string
    workshopOrderId?: number | null
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    workTasks?: WorkTaskUncheckedCreateNestedManyWithoutRollerInput
  }

  export type RollerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopOrder?: WorkshopOrderUpdateOneWithoutRollersNestedInput
    workTasks?: WorkTaskUpdateManyWithoutRollerNestedInput
  }

  export type RollerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    workshopOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: WorkTaskUncheckedUpdateManyWithoutRollerNestedInput
  }

  export type RollerCreateManyInput = {
    id: string
    orderCode: string
    workshopOrderId?: number | null
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type RollerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RollerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    workshopOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNotificationCreateInput = {
    title: string
    message: string
    targetRole: string
    sourceType?: string | null
    sourceId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SystemNotificationUncheckedCreateInput = {
    id?: number
    title: string
    message: string
    targetRole: string
    sourceType?: string | null
    sourceId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SystemNotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNotificationCreateManyInput = {
    id?: number
    title: string
    message: string
    targetRole: string
    sourceType?: string | null
    sourceId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SystemNotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    title: string
    description: string
    targetRole: string
    sourceRole?: string
    sourceType?: string | null
    sourceId?: string | null
    orderCode?: string | null
    rollerId?: string | null
    taskId?: string | null
    issueId?: number | null
    status?: string
    priority?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ReferralMessageCreateNestedManyWithoutReferralInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    targetRole: string
    sourceRole?: string
    sourceType?: string | null
    sourceId?: string | null
    orderCode?: string | null
    rollerId?: string | null
    taskId?: string | null
    issueId?: number | null
    status?: string
    priority?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ReferralMessageUncheckedCreateNestedManyWithoutReferralInput
  }

  export type ReferralUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderCode?: NullableStringFieldUpdateOperationsInput | string | null
    rollerId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    issueId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ReferralMessageUpdateManyWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderCode?: NullableStringFieldUpdateOperationsInput | string | null
    rollerId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    issueId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ReferralMessageUncheckedUpdateManyWithoutReferralNestedInput
  }

  export type ReferralCreateManyInput = {
    id?: number
    title: string
    description: string
    targetRole: string
    sourceRole?: string
    sourceType?: string | null
    sourceId?: string | null
    orderCode?: string | null
    rollerId?: string | null
    taskId?: string | null
    issueId?: number | null
    status?: string
    priority?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderCode?: NullableStringFieldUpdateOperationsInput | string | null
    rollerId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    issueId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderCode?: NullableStringFieldUpdateOperationsInput | string | null
    rollerId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    issueId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralMessageCreateInput = {
    authorRole: string
    authorName?: string | null
    message: string
    createdAt?: Date | string
    referral: ReferralCreateNestedOneWithoutMessagesInput
  }

  export type ReferralMessageUncheckedCreateInput = {
    id?: number
    referralId: number
    authorRole: string
    authorName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ReferralMessageUpdateInput = {
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: ReferralUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ReferralMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referralId?: IntFieldUpdateOperationsInput | number
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralMessageCreateManyInput = {
    id?: number
    referralId: number
    authorRole: string
    authorName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ReferralMessageUpdateManyMutationInput = {
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    referralId?: IntFieldUpdateOperationsInput | number
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HealthCheckOrderByRelevanceInput = {
    fields: HealthCheckOrderByRelevanceFieldEnum | HealthCheckOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HealthCheckCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthCheckAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthCheckMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthCheckMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthCheckSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WorkerSkillListRelationFilter = {
    every?: WorkerSkillWhereInput
    some?: WorkerSkillWhereInput
    none?: WorkerSkillWhereInput
  }

  export type WorkTaskListRelationFilter = {
    every?: WorkTaskWhereInput
    some?: WorkTaskWhereInput
    none?: WorkTaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkerSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserOrderByRelevanceInput = {
    fields: AppUserOrderByRelevanceFieldEnum | AppUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    phone?: SortOrder
    baleUserId?: SortOrder
    profileImageUrl?: SortOrder
    notes?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    phone?: SortOrder
    baleUserId?: SortOrder
    profileImageUrl?: SortOrder
    notes?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    phone?: SortOrder
    baleUserId?: SortOrder
    profileImageUrl?: SortOrder
    notes?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppUserScalarRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type WorkerSkillOrderByRelevanceInput = {
    fields: WorkerSkillOrderByRelevanceFieldEnum | WorkerSkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkerSkillUserIdStageCompoundUniqueInput = {
    userId: number
    stage: string
  }

  export type WorkerSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkerSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerSkillSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkshopOrderListRelationFilter = {
    every?: WorkshopOrderWhereInput
    some?: WorkshopOrderWhereInput
    none?: WorkshopOrderWhereInput
  }

  export type WorkshopOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSettlementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementType | EnumSettlementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementType[]
    notIn?: $Enums.SettlementType[]
    not?: NestedEnumSettlementTypeFilter<$PrismaModel> | $Enums.SettlementType
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type RollerListRelationFilter = {
    every?: RollerWhereInput
    some?: RollerWhereInput
    none?: RollerWhereInput
  }

  export type SatisfactionFeedbackListRelationFilter = {
    every?: SatisfactionFeedbackWhereInput
    some?: SatisfactionFeedbackWhereInput
    none?: SatisfactionFeedbackWhereInput
  }

  export type RollerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SatisfactionFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkshopOrderOrderByRelevanceInput = {
    fields: WorkshopOrderOrderByRelevanceFieldEnum | WorkshopOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkshopOrderCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    customerId?: SortOrder
    settlementType?: SortOrder
    status?: SortOrder
    satisfactionStatus?: SortOrder
    notes?: SortOrder
    productionStartedAt?: SortOrder
    productionFinishedAt?: SortOrder
    deliveredAt?: SortOrder
    satisfactionDueAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkshopOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type WorkshopOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    customerId?: SortOrder
    settlementType?: SortOrder
    status?: SortOrder
    satisfactionStatus?: SortOrder
    notes?: SortOrder
    productionStartedAt?: SortOrder
    productionFinishedAt?: SortOrder
    deliveredAt?: SortOrder
    satisfactionDueAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkshopOrderMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    customerId?: SortOrder
    settlementType?: SortOrder
    status?: SortOrder
    satisfactionStatus?: SortOrder
    notes?: SortOrder
    productionStartedAt?: SortOrder
    productionFinishedAt?: SortOrder
    deliveredAt?: SortOrder
    satisfactionDueAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkshopOrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type EnumSettlementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementType | EnumSettlementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementType[]
    notIn?: $Enums.SettlementType[]
    not?: NestedEnumSettlementTypeWithAggregatesFilter<$PrismaModel> | $Enums.SettlementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementTypeFilter<$PrismaModel>
    _max?: NestedEnumSettlementTypeFilter<$PrismaModel>
  }

  export type WorkshopOrderScalarRelationFilter = {
    is?: WorkshopOrderWhereInput
    isNot?: WorkshopOrderWhereInput
  }

  export type SatisfactionFeedbackOrderByRelevanceInput = {
    fields: SatisfactionFeedbackOrderByRelevanceFieldEnum | SatisfactionFeedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SatisfactionFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    result?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SatisfactionFeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type SatisfactionFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    result?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SatisfactionFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    result?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SatisfactionFeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[]
    notIn?: $Enums.AttendanceType[]
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type AttendanceEventOrderByRelevanceInput = {
    fields: AttendanceEventOrderByRelevanceFieldEnum | AttendanceEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    type?: SortOrder
    note?: SortOrder
    eventAt?: SortOrder
    eventDateFa?: SortOrder
    eventTimeFa?: SortOrder
    eventMonthFa?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AttendanceEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    type?: SortOrder
    note?: SortOrder
    eventAt?: SortOrder
    eventDateFa?: SortOrder
    eventTimeFa?: SortOrder
    eventMonthFa?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    type?: SortOrder
    note?: SortOrder
    eventAt?: SortOrder
    eventDateFa?: SortOrder
    eventTimeFa?: SortOrder
    eventMonthFa?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[]
    notIn?: $Enums.AttendanceType[]
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type AttendanceDailySummaryOrderByRelevanceInput = {
    fields: AttendanceDailySummaryOrderByRelevanceFieldEnum | AttendanceDailySummaryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceDailySummaryWorkerNameShiftDateCompoundUniqueInput = {
    workerName: string
    shiftDate: string
  }

  export type AttendanceDailySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    shiftMonthFa?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    lastState?: SortOrder
    earlyArrivalReward?: SortOrder
    endOfDayReward?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceDailySummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
  }

  export type AttendanceDailySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    shiftMonthFa?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    lastState?: SortOrder
    earlyArrivalReward?: SortOrder
    endOfDayReward?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceDailySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    shiftMonthFa?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    lastState?: SortOrder
    earlyArrivalReward?: SortOrder
    endOfDayReward?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceDailySummarySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    overtimeMinutes?: SortOrder
    tempExitCount?: SortOrder
    totalRewardAmount?: SortOrder
  }

  export type RewardLedgerOrderByRelevanceInput = {
    fields: RewardLedgerOrderByRelevanceFieldEnum | RewardLedgerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RewardLedgerWorkerNameShiftDateTypeCompoundUniqueInput = {
    workerName: string
    shiftDate: string
    type: string
  }

  export type RewardLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardLedgerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type RewardLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workerName?: SortOrder
    shiftDate?: SortOrder
    shiftDateFa?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardLedgerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type RollerScalarRelationFilter = {
    is?: RollerWhereInput
    isNot?: RollerWhereInput
  }

  export type AppUserNullableScalarRelationFilter = {
    is?: AppUserWhereInput | null
    isNot?: AppUserWhereInput | null
  }

  export type WorkTaskOrderByRelevanceInput = {
    fields: WorkTaskOrderByRelevanceFieldEnum | WorkTaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkTaskCountOrderByAggregateInput = {
    id?: SortOrder
    rollerId?: SortOrder
    sequence?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    worker?: SortOrder
    pickedByUserId?: SortOrder
    availableAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    blockedAt?: SortOrder
    blockedReason?: SortOrder
    estimatedDays?: SortOrder
    dueAt?: SortOrder
    completedEarly?: SortOrder
    delayed?: SortOrder
    delayNotified?: SortOrder
    delayDetectedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkTaskAvgOrderByAggregateInput = {
    sequence?: SortOrder
    pickedByUserId?: SortOrder
    estimatedDays?: SortOrder
  }

  export type WorkTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    rollerId?: SortOrder
    sequence?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    worker?: SortOrder
    pickedByUserId?: SortOrder
    availableAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    blockedAt?: SortOrder
    blockedReason?: SortOrder
    estimatedDays?: SortOrder
    dueAt?: SortOrder
    completedEarly?: SortOrder
    delayed?: SortOrder
    delayNotified?: SortOrder
    delayDetectedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkTaskMinOrderByAggregateInput = {
    id?: SortOrder
    rollerId?: SortOrder
    sequence?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    worker?: SortOrder
    pickedByUserId?: SortOrder
    availableAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    blockedAt?: SortOrder
    blockedReason?: SortOrder
    estimatedDays?: SortOrder
    dueAt?: SortOrder
    completedEarly?: SortOrder
    delayed?: SortOrder
    delayNotified?: SortOrder
    delayDetectedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkTaskSumOrderByAggregateInput = {
    sequence?: SortOrder
    pickedByUserId?: SortOrder
    estimatedDays?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type IssueReportOrderByRelevanceInput = {
    fields: IssueReportOrderByRelevanceFieldEnum | IssueReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IssueReportCountOrderByAggregateInput = {
    id?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrder
    stage?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type IssueReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IssueReportMaxOrderByAggregateInput = {
    id?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrder
    stage?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type IssueReportMinOrderByAggregateInput = {
    id?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrder
    stage?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type IssueReportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkshopOrderNullableScalarRelationFilter = {
    is?: WorkshopOrderWhereInput | null
    isNot?: WorkshopOrderWhereInput | null
  }

  export type RollerOrderByRelevanceInput = {
    fields: RollerOrderByRelevanceFieldEnum | RollerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RollerCountOrderByAggregateInput = {
    id?: SortOrder
    orderCode?: SortOrder
    workshopOrderId?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    ready?: SortOrder
    settled?: SortOrder
    sent?: SortOrder
    settlementRecordedAt?: SortOrder
    sentAt?: SortOrder
    shipmentNote?: SortOrder
    diameterMm?: SortOrder
    lengthMm?: SortOrder
    material?: SortOrder
    thicknessMm?: SortOrder
    requiredStages?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RollerAvgOrderByAggregateInput = {
    workshopOrderId?: SortOrder
    diameterMm?: SortOrder
    lengthMm?: SortOrder
    thicknessMm?: SortOrder
  }

  export type RollerMaxOrderByAggregateInput = {
    id?: SortOrder
    orderCode?: SortOrder
    workshopOrderId?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    ready?: SortOrder
    settled?: SortOrder
    sent?: SortOrder
    settlementRecordedAt?: SortOrder
    sentAt?: SortOrder
    shipmentNote?: SortOrder
    diameterMm?: SortOrder
    lengthMm?: SortOrder
    material?: SortOrder
    thicknessMm?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RollerMinOrderByAggregateInput = {
    id?: SortOrder
    orderCode?: SortOrder
    workshopOrderId?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    ready?: SortOrder
    settled?: SortOrder
    sent?: SortOrder
    settlementRecordedAt?: SortOrder
    sentAt?: SortOrder
    shipmentNote?: SortOrder
    diameterMm?: SortOrder
    lengthMm?: SortOrder
    material?: SortOrder
    thicknessMm?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RollerSumOrderByAggregateInput = {
    workshopOrderId?: SortOrder
    diameterMm?: SortOrder
    lengthMm?: SortOrder
    thicknessMm?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SystemNotificationOrderByRelevanceInput = {
    fields: SystemNotificationOrderByRelevanceFieldEnum | SystemNotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SystemNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRole?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemNotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRole?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRole?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemNotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReferralMessageListRelationFilter = {
    every?: ReferralMessageWhereInput
    some?: ReferralMessageWhereInput
    none?: ReferralMessageWhereInput
  }

  export type ReferralMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralOrderByRelevanceInput = {
    fields: ReferralOrderByRelevanceFieldEnum | ReferralOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetRole?: SortOrder
    sourceRole?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    orderCode?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrder
    issueId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetRole?: SortOrder
    sourceRole?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    orderCode?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrder
    issueId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetRole?: SortOrder
    sourceRole?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    orderCode?: SortOrder
    rollerId?: SortOrder
    taskId?: SortOrder
    issueId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
  }

  export type ReferralScalarRelationFilter = {
    is?: ReferralWhereInput
    isNot?: ReferralWhereInput
  }

  export type ReferralMessageOrderByRelevanceInput = {
    fields: ReferralMessageOrderByRelevanceFieldEnum | ReferralMessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReferralMessageCountOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    authorRole?: SortOrder
    authorName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
  }

  export type ReferralMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    authorRole?: SortOrder
    authorName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMessageMinOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    authorRole?: SortOrder
    authorName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMessageSumOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkerSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkerSkillCreateWithoutUserInput, WorkerSkillUncheckedCreateWithoutUserInput> | WorkerSkillCreateWithoutUserInput[] | WorkerSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkerSkillCreateOrConnectWithoutUserInput | WorkerSkillCreateOrConnectWithoutUserInput[]
    createMany?: WorkerSkillCreateManyUserInputEnvelope
    connect?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
  }

  export type WorkTaskCreateNestedManyWithoutPickedByUserInput = {
    create?: XOR<WorkTaskCreateWithoutPickedByUserInput, WorkTaskUncheckedCreateWithoutPickedByUserInput> | WorkTaskCreateWithoutPickedByUserInput[] | WorkTaskUncheckedCreateWithoutPickedByUserInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutPickedByUserInput | WorkTaskCreateOrConnectWithoutPickedByUserInput[]
    createMany?: WorkTaskCreateManyPickedByUserInputEnvelope
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
  }

  export type WorkerSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkerSkillCreateWithoutUserInput, WorkerSkillUncheckedCreateWithoutUserInput> | WorkerSkillCreateWithoutUserInput[] | WorkerSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkerSkillCreateOrConnectWithoutUserInput | WorkerSkillCreateOrConnectWithoutUserInput[]
    createMany?: WorkerSkillCreateManyUserInputEnvelope
    connect?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
  }

  export type WorkTaskUncheckedCreateNestedManyWithoutPickedByUserInput = {
    create?: XOR<WorkTaskCreateWithoutPickedByUserInput, WorkTaskUncheckedCreateWithoutPickedByUserInput> | WorkTaskCreateWithoutPickedByUserInput[] | WorkTaskUncheckedCreateWithoutPickedByUserInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutPickedByUserInput | WorkTaskCreateOrConnectWithoutPickedByUserInput[]
    createMany?: WorkTaskCreateManyPickedByUserInputEnvelope
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkerSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkerSkillCreateWithoutUserInput, WorkerSkillUncheckedCreateWithoutUserInput> | WorkerSkillCreateWithoutUserInput[] | WorkerSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkerSkillCreateOrConnectWithoutUserInput | WorkerSkillCreateOrConnectWithoutUserInput[]
    upsert?: WorkerSkillUpsertWithWhereUniqueWithoutUserInput | WorkerSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkerSkillCreateManyUserInputEnvelope
    set?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    disconnect?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    delete?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    connect?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    update?: WorkerSkillUpdateWithWhereUniqueWithoutUserInput | WorkerSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkerSkillUpdateManyWithWhereWithoutUserInput | WorkerSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkerSkillScalarWhereInput | WorkerSkillScalarWhereInput[]
  }

  export type WorkTaskUpdateManyWithoutPickedByUserNestedInput = {
    create?: XOR<WorkTaskCreateWithoutPickedByUserInput, WorkTaskUncheckedCreateWithoutPickedByUserInput> | WorkTaskCreateWithoutPickedByUserInput[] | WorkTaskUncheckedCreateWithoutPickedByUserInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutPickedByUserInput | WorkTaskCreateOrConnectWithoutPickedByUserInput[]
    upsert?: WorkTaskUpsertWithWhereUniqueWithoutPickedByUserInput | WorkTaskUpsertWithWhereUniqueWithoutPickedByUserInput[]
    createMany?: WorkTaskCreateManyPickedByUserInputEnvelope
    set?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    disconnect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    delete?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    update?: WorkTaskUpdateWithWhereUniqueWithoutPickedByUserInput | WorkTaskUpdateWithWhereUniqueWithoutPickedByUserInput[]
    updateMany?: WorkTaskUpdateManyWithWhereWithoutPickedByUserInput | WorkTaskUpdateManyWithWhereWithoutPickedByUserInput[]
    deleteMany?: WorkTaskScalarWhereInput | WorkTaskScalarWhereInput[]
  }

  export type WorkerSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkerSkillCreateWithoutUserInput, WorkerSkillUncheckedCreateWithoutUserInput> | WorkerSkillCreateWithoutUserInput[] | WorkerSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkerSkillCreateOrConnectWithoutUserInput | WorkerSkillCreateOrConnectWithoutUserInput[]
    upsert?: WorkerSkillUpsertWithWhereUniqueWithoutUserInput | WorkerSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkerSkillCreateManyUserInputEnvelope
    set?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    disconnect?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    delete?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    connect?: WorkerSkillWhereUniqueInput | WorkerSkillWhereUniqueInput[]
    update?: WorkerSkillUpdateWithWhereUniqueWithoutUserInput | WorkerSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkerSkillUpdateManyWithWhereWithoutUserInput | WorkerSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkerSkillScalarWhereInput | WorkerSkillScalarWhereInput[]
  }

  export type WorkTaskUncheckedUpdateManyWithoutPickedByUserNestedInput = {
    create?: XOR<WorkTaskCreateWithoutPickedByUserInput, WorkTaskUncheckedCreateWithoutPickedByUserInput> | WorkTaskCreateWithoutPickedByUserInput[] | WorkTaskUncheckedCreateWithoutPickedByUserInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutPickedByUserInput | WorkTaskCreateOrConnectWithoutPickedByUserInput[]
    upsert?: WorkTaskUpsertWithWhereUniqueWithoutPickedByUserInput | WorkTaskUpsertWithWhereUniqueWithoutPickedByUserInput[]
    createMany?: WorkTaskCreateManyPickedByUserInputEnvelope
    set?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    disconnect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    delete?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    update?: WorkTaskUpdateWithWhereUniqueWithoutPickedByUserInput | WorkTaskUpdateWithWhereUniqueWithoutPickedByUserInput[]
    updateMany?: WorkTaskUpdateManyWithWhereWithoutPickedByUserInput | WorkTaskUpdateManyWithWhereWithoutPickedByUserInput[]
    deleteMany?: WorkTaskScalarWhereInput | WorkTaskScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<AppUserCreateWithoutSkillsInput, AppUserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutSkillsInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppUserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<AppUserCreateWithoutSkillsInput, AppUserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutSkillsInput
    upsert?: AppUserUpsertWithoutSkillsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutSkillsInput, AppUserUpdateWithoutSkillsInput>, AppUserUncheckedUpdateWithoutSkillsInput>
  }

  export type WorkshopOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<WorkshopOrderCreateWithoutCustomerInput, WorkshopOrderUncheckedCreateWithoutCustomerInput> | WorkshopOrderCreateWithoutCustomerInput[] | WorkshopOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutCustomerInput | WorkshopOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: WorkshopOrderCreateManyCustomerInputEnvelope
    connect?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
  }

  export type WorkshopOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<WorkshopOrderCreateWithoutCustomerInput, WorkshopOrderUncheckedCreateWithoutCustomerInput> | WorkshopOrderCreateWithoutCustomerInput[] | WorkshopOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutCustomerInput | WorkshopOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: WorkshopOrderCreateManyCustomerInputEnvelope
    connect?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
  }

  export type WorkshopOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<WorkshopOrderCreateWithoutCustomerInput, WorkshopOrderUncheckedCreateWithoutCustomerInput> | WorkshopOrderCreateWithoutCustomerInput[] | WorkshopOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutCustomerInput | WorkshopOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: WorkshopOrderUpsertWithWhereUniqueWithoutCustomerInput | WorkshopOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: WorkshopOrderCreateManyCustomerInputEnvelope
    set?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    disconnect?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    delete?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    connect?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    update?: WorkshopOrderUpdateWithWhereUniqueWithoutCustomerInput | WorkshopOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: WorkshopOrderUpdateManyWithWhereWithoutCustomerInput | WorkshopOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: WorkshopOrderScalarWhereInput | WorkshopOrderScalarWhereInput[]
  }

  export type WorkshopOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<WorkshopOrderCreateWithoutCustomerInput, WorkshopOrderUncheckedCreateWithoutCustomerInput> | WorkshopOrderCreateWithoutCustomerInput[] | WorkshopOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutCustomerInput | WorkshopOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: WorkshopOrderUpsertWithWhereUniqueWithoutCustomerInput | WorkshopOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: WorkshopOrderCreateManyCustomerInputEnvelope
    set?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    disconnect?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    delete?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    connect?: WorkshopOrderWhereUniqueInput | WorkshopOrderWhereUniqueInput[]
    update?: WorkshopOrderUpdateWithWhereUniqueWithoutCustomerInput | WorkshopOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: WorkshopOrderUpdateManyWithWhereWithoutCustomerInput | WorkshopOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: WorkshopOrderScalarWhereInput | WorkshopOrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type RollerCreateNestedManyWithoutWorkshopOrderInput = {
    create?: XOR<RollerCreateWithoutWorkshopOrderInput, RollerUncheckedCreateWithoutWorkshopOrderInput> | RollerCreateWithoutWorkshopOrderInput[] | RollerUncheckedCreateWithoutWorkshopOrderInput[]
    connectOrCreate?: RollerCreateOrConnectWithoutWorkshopOrderInput | RollerCreateOrConnectWithoutWorkshopOrderInput[]
    createMany?: RollerCreateManyWorkshopOrderInputEnvelope
    connect?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
  }

  export type SatisfactionFeedbackCreateNestedManyWithoutOrderInput = {
    create?: XOR<SatisfactionFeedbackCreateWithoutOrderInput, SatisfactionFeedbackUncheckedCreateWithoutOrderInput> | SatisfactionFeedbackCreateWithoutOrderInput[] | SatisfactionFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SatisfactionFeedbackCreateOrConnectWithoutOrderInput | SatisfactionFeedbackCreateOrConnectWithoutOrderInput[]
    createMany?: SatisfactionFeedbackCreateManyOrderInputEnvelope
    connect?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
  }

  export type RollerUncheckedCreateNestedManyWithoutWorkshopOrderInput = {
    create?: XOR<RollerCreateWithoutWorkshopOrderInput, RollerUncheckedCreateWithoutWorkshopOrderInput> | RollerCreateWithoutWorkshopOrderInput[] | RollerUncheckedCreateWithoutWorkshopOrderInput[]
    connectOrCreate?: RollerCreateOrConnectWithoutWorkshopOrderInput | RollerCreateOrConnectWithoutWorkshopOrderInput[]
    createMany?: RollerCreateManyWorkshopOrderInputEnvelope
    connect?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
  }

  export type SatisfactionFeedbackUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<SatisfactionFeedbackCreateWithoutOrderInput, SatisfactionFeedbackUncheckedCreateWithoutOrderInput> | SatisfactionFeedbackCreateWithoutOrderInput[] | SatisfactionFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SatisfactionFeedbackCreateOrConnectWithoutOrderInput | SatisfactionFeedbackCreateOrConnectWithoutOrderInput[]
    createMany?: SatisfactionFeedbackCreateManyOrderInputEnvelope
    connect?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
  }

  export type EnumSettlementTypeFieldUpdateOperationsInput = {
    set?: $Enums.SettlementType
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type RollerUpdateManyWithoutWorkshopOrderNestedInput = {
    create?: XOR<RollerCreateWithoutWorkshopOrderInput, RollerUncheckedCreateWithoutWorkshopOrderInput> | RollerCreateWithoutWorkshopOrderInput[] | RollerUncheckedCreateWithoutWorkshopOrderInput[]
    connectOrCreate?: RollerCreateOrConnectWithoutWorkshopOrderInput | RollerCreateOrConnectWithoutWorkshopOrderInput[]
    upsert?: RollerUpsertWithWhereUniqueWithoutWorkshopOrderInput | RollerUpsertWithWhereUniqueWithoutWorkshopOrderInput[]
    createMany?: RollerCreateManyWorkshopOrderInputEnvelope
    set?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    disconnect?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    delete?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    connect?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    update?: RollerUpdateWithWhereUniqueWithoutWorkshopOrderInput | RollerUpdateWithWhereUniqueWithoutWorkshopOrderInput[]
    updateMany?: RollerUpdateManyWithWhereWithoutWorkshopOrderInput | RollerUpdateManyWithWhereWithoutWorkshopOrderInput[]
    deleteMany?: RollerScalarWhereInput | RollerScalarWhereInput[]
  }

  export type SatisfactionFeedbackUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SatisfactionFeedbackCreateWithoutOrderInput, SatisfactionFeedbackUncheckedCreateWithoutOrderInput> | SatisfactionFeedbackCreateWithoutOrderInput[] | SatisfactionFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SatisfactionFeedbackCreateOrConnectWithoutOrderInput | SatisfactionFeedbackCreateOrConnectWithoutOrderInput[]
    upsert?: SatisfactionFeedbackUpsertWithWhereUniqueWithoutOrderInput | SatisfactionFeedbackUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SatisfactionFeedbackCreateManyOrderInputEnvelope
    set?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    disconnect?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    delete?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    connect?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    update?: SatisfactionFeedbackUpdateWithWhereUniqueWithoutOrderInput | SatisfactionFeedbackUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SatisfactionFeedbackUpdateManyWithWhereWithoutOrderInput | SatisfactionFeedbackUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SatisfactionFeedbackScalarWhereInput | SatisfactionFeedbackScalarWhereInput[]
  }

  export type RollerUncheckedUpdateManyWithoutWorkshopOrderNestedInput = {
    create?: XOR<RollerCreateWithoutWorkshopOrderInput, RollerUncheckedCreateWithoutWorkshopOrderInput> | RollerCreateWithoutWorkshopOrderInput[] | RollerUncheckedCreateWithoutWorkshopOrderInput[]
    connectOrCreate?: RollerCreateOrConnectWithoutWorkshopOrderInput | RollerCreateOrConnectWithoutWorkshopOrderInput[]
    upsert?: RollerUpsertWithWhereUniqueWithoutWorkshopOrderInput | RollerUpsertWithWhereUniqueWithoutWorkshopOrderInput[]
    createMany?: RollerCreateManyWorkshopOrderInputEnvelope
    set?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    disconnect?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    delete?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    connect?: RollerWhereUniqueInput | RollerWhereUniqueInput[]
    update?: RollerUpdateWithWhereUniqueWithoutWorkshopOrderInput | RollerUpdateWithWhereUniqueWithoutWorkshopOrderInput[]
    updateMany?: RollerUpdateManyWithWhereWithoutWorkshopOrderInput | RollerUpdateManyWithWhereWithoutWorkshopOrderInput[]
    deleteMany?: RollerScalarWhereInput | RollerScalarWhereInput[]
  }

  export type SatisfactionFeedbackUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SatisfactionFeedbackCreateWithoutOrderInput, SatisfactionFeedbackUncheckedCreateWithoutOrderInput> | SatisfactionFeedbackCreateWithoutOrderInput[] | SatisfactionFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SatisfactionFeedbackCreateOrConnectWithoutOrderInput | SatisfactionFeedbackCreateOrConnectWithoutOrderInput[]
    upsert?: SatisfactionFeedbackUpsertWithWhereUniqueWithoutOrderInput | SatisfactionFeedbackUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SatisfactionFeedbackCreateManyOrderInputEnvelope
    set?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    disconnect?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    delete?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    connect?: SatisfactionFeedbackWhereUniqueInput | SatisfactionFeedbackWhereUniqueInput[]
    update?: SatisfactionFeedbackUpdateWithWhereUniqueWithoutOrderInput | SatisfactionFeedbackUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SatisfactionFeedbackUpdateManyWithWhereWithoutOrderInput | SatisfactionFeedbackUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SatisfactionFeedbackScalarWhereInput | SatisfactionFeedbackScalarWhereInput[]
  }

  export type WorkshopOrderCreateNestedOneWithoutSatisfactionFeedbacksInput = {
    create?: XOR<WorkshopOrderCreateWithoutSatisfactionFeedbacksInput, WorkshopOrderUncheckedCreateWithoutSatisfactionFeedbacksInput>
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutSatisfactionFeedbacksInput
    connect?: WorkshopOrderWhereUniqueInput
  }

  export type WorkshopOrderUpdateOneRequiredWithoutSatisfactionFeedbacksNestedInput = {
    create?: XOR<WorkshopOrderCreateWithoutSatisfactionFeedbacksInput, WorkshopOrderUncheckedCreateWithoutSatisfactionFeedbacksInput>
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutSatisfactionFeedbacksInput
    upsert?: WorkshopOrderUpsertWithoutSatisfactionFeedbacksInput
    connect?: WorkshopOrderWhereUniqueInput
    update?: XOR<XOR<WorkshopOrderUpdateToOneWithWhereWithoutSatisfactionFeedbacksInput, WorkshopOrderUpdateWithoutSatisfactionFeedbacksInput>, WorkshopOrderUncheckedUpdateWithoutSatisfactionFeedbacksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAttendanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceType
  }

  export type RollerCreateNestedOneWithoutWorkTasksInput = {
    create?: XOR<RollerCreateWithoutWorkTasksInput, RollerUncheckedCreateWithoutWorkTasksInput>
    connectOrCreate?: RollerCreateOrConnectWithoutWorkTasksInput
    connect?: RollerWhereUniqueInput
  }

  export type AppUserCreateNestedOneWithoutPickedTasksInput = {
    create?: XOR<AppUserCreateWithoutPickedTasksInput, AppUserUncheckedCreateWithoutPickedTasksInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutPickedTasksInput
    connect?: AppUserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type RollerUpdateOneRequiredWithoutWorkTasksNestedInput = {
    create?: XOR<RollerCreateWithoutWorkTasksInput, RollerUncheckedCreateWithoutWorkTasksInput>
    connectOrCreate?: RollerCreateOrConnectWithoutWorkTasksInput
    upsert?: RollerUpsertWithoutWorkTasksInput
    connect?: RollerWhereUniqueInput
    update?: XOR<XOR<RollerUpdateToOneWithWhereWithoutWorkTasksInput, RollerUpdateWithoutWorkTasksInput>, RollerUncheckedUpdateWithoutWorkTasksInput>
  }

  export type AppUserUpdateOneWithoutPickedTasksNestedInput = {
    create?: XOR<AppUserCreateWithoutPickedTasksInput, AppUserUncheckedCreateWithoutPickedTasksInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutPickedTasksInput
    upsert?: AppUserUpsertWithoutPickedTasksInput
    disconnect?: AppUserWhereInput | boolean
    delete?: AppUserWhereInput | boolean
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutPickedTasksInput, AppUserUpdateWithoutPickedTasksInput>, AppUserUncheckedUpdateWithoutPickedTasksInput>
  }

  export type WorkshopOrderCreateNestedOneWithoutRollersInput = {
    create?: XOR<WorkshopOrderCreateWithoutRollersInput, WorkshopOrderUncheckedCreateWithoutRollersInput>
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutRollersInput
    connect?: WorkshopOrderWhereUniqueInput
  }

  export type WorkTaskCreateNestedManyWithoutRollerInput = {
    create?: XOR<WorkTaskCreateWithoutRollerInput, WorkTaskUncheckedCreateWithoutRollerInput> | WorkTaskCreateWithoutRollerInput[] | WorkTaskUncheckedCreateWithoutRollerInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutRollerInput | WorkTaskCreateOrConnectWithoutRollerInput[]
    createMany?: WorkTaskCreateManyRollerInputEnvelope
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
  }

  export type WorkTaskUncheckedCreateNestedManyWithoutRollerInput = {
    create?: XOR<WorkTaskCreateWithoutRollerInput, WorkTaskUncheckedCreateWithoutRollerInput> | WorkTaskCreateWithoutRollerInput[] | WorkTaskUncheckedCreateWithoutRollerInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutRollerInput | WorkTaskCreateOrConnectWithoutRollerInput[]
    createMany?: WorkTaskCreateManyRollerInputEnvelope
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkshopOrderUpdateOneWithoutRollersNestedInput = {
    create?: XOR<WorkshopOrderCreateWithoutRollersInput, WorkshopOrderUncheckedCreateWithoutRollersInput>
    connectOrCreate?: WorkshopOrderCreateOrConnectWithoutRollersInput
    upsert?: WorkshopOrderUpsertWithoutRollersInput
    disconnect?: WorkshopOrderWhereInput | boolean
    delete?: WorkshopOrderWhereInput | boolean
    connect?: WorkshopOrderWhereUniqueInput
    update?: XOR<XOR<WorkshopOrderUpdateToOneWithWhereWithoutRollersInput, WorkshopOrderUpdateWithoutRollersInput>, WorkshopOrderUncheckedUpdateWithoutRollersInput>
  }

  export type WorkTaskUpdateManyWithoutRollerNestedInput = {
    create?: XOR<WorkTaskCreateWithoutRollerInput, WorkTaskUncheckedCreateWithoutRollerInput> | WorkTaskCreateWithoutRollerInput[] | WorkTaskUncheckedCreateWithoutRollerInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutRollerInput | WorkTaskCreateOrConnectWithoutRollerInput[]
    upsert?: WorkTaskUpsertWithWhereUniqueWithoutRollerInput | WorkTaskUpsertWithWhereUniqueWithoutRollerInput[]
    createMany?: WorkTaskCreateManyRollerInputEnvelope
    set?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    disconnect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    delete?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    update?: WorkTaskUpdateWithWhereUniqueWithoutRollerInput | WorkTaskUpdateWithWhereUniqueWithoutRollerInput[]
    updateMany?: WorkTaskUpdateManyWithWhereWithoutRollerInput | WorkTaskUpdateManyWithWhereWithoutRollerInput[]
    deleteMany?: WorkTaskScalarWhereInput | WorkTaskScalarWhereInput[]
  }

  export type WorkTaskUncheckedUpdateManyWithoutRollerNestedInput = {
    create?: XOR<WorkTaskCreateWithoutRollerInput, WorkTaskUncheckedCreateWithoutRollerInput> | WorkTaskCreateWithoutRollerInput[] | WorkTaskUncheckedCreateWithoutRollerInput[]
    connectOrCreate?: WorkTaskCreateOrConnectWithoutRollerInput | WorkTaskCreateOrConnectWithoutRollerInput[]
    upsert?: WorkTaskUpsertWithWhereUniqueWithoutRollerInput | WorkTaskUpsertWithWhereUniqueWithoutRollerInput[]
    createMany?: WorkTaskCreateManyRollerInputEnvelope
    set?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    disconnect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    delete?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    connect?: WorkTaskWhereUniqueInput | WorkTaskWhereUniqueInput[]
    update?: WorkTaskUpdateWithWhereUniqueWithoutRollerInput | WorkTaskUpdateWithWhereUniqueWithoutRollerInput[]
    updateMany?: WorkTaskUpdateManyWithWhereWithoutRollerInput | WorkTaskUpdateManyWithWhereWithoutRollerInput[]
    deleteMany?: WorkTaskScalarWhereInput | WorkTaskScalarWhereInput[]
  }

  export type ReferralMessageCreateNestedManyWithoutReferralInput = {
    create?: XOR<ReferralMessageCreateWithoutReferralInput, ReferralMessageUncheckedCreateWithoutReferralInput> | ReferralMessageCreateWithoutReferralInput[] | ReferralMessageUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: ReferralMessageCreateOrConnectWithoutReferralInput | ReferralMessageCreateOrConnectWithoutReferralInput[]
    createMany?: ReferralMessageCreateManyReferralInputEnvelope
    connect?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
  }

  export type ReferralMessageUncheckedCreateNestedManyWithoutReferralInput = {
    create?: XOR<ReferralMessageCreateWithoutReferralInput, ReferralMessageUncheckedCreateWithoutReferralInput> | ReferralMessageCreateWithoutReferralInput[] | ReferralMessageUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: ReferralMessageCreateOrConnectWithoutReferralInput | ReferralMessageCreateOrConnectWithoutReferralInput[]
    createMany?: ReferralMessageCreateManyReferralInputEnvelope
    connect?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
  }

  export type ReferralMessageUpdateManyWithoutReferralNestedInput = {
    create?: XOR<ReferralMessageCreateWithoutReferralInput, ReferralMessageUncheckedCreateWithoutReferralInput> | ReferralMessageCreateWithoutReferralInput[] | ReferralMessageUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: ReferralMessageCreateOrConnectWithoutReferralInput | ReferralMessageCreateOrConnectWithoutReferralInput[]
    upsert?: ReferralMessageUpsertWithWhereUniqueWithoutReferralInput | ReferralMessageUpsertWithWhereUniqueWithoutReferralInput[]
    createMany?: ReferralMessageCreateManyReferralInputEnvelope
    set?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    disconnect?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    delete?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    connect?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    update?: ReferralMessageUpdateWithWhereUniqueWithoutReferralInput | ReferralMessageUpdateWithWhereUniqueWithoutReferralInput[]
    updateMany?: ReferralMessageUpdateManyWithWhereWithoutReferralInput | ReferralMessageUpdateManyWithWhereWithoutReferralInput[]
    deleteMany?: ReferralMessageScalarWhereInput | ReferralMessageScalarWhereInput[]
  }

  export type ReferralMessageUncheckedUpdateManyWithoutReferralNestedInput = {
    create?: XOR<ReferralMessageCreateWithoutReferralInput, ReferralMessageUncheckedCreateWithoutReferralInput> | ReferralMessageCreateWithoutReferralInput[] | ReferralMessageUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: ReferralMessageCreateOrConnectWithoutReferralInput | ReferralMessageCreateOrConnectWithoutReferralInput[]
    upsert?: ReferralMessageUpsertWithWhereUniqueWithoutReferralInput | ReferralMessageUpsertWithWhereUniqueWithoutReferralInput[]
    createMany?: ReferralMessageCreateManyReferralInputEnvelope
    set?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    disconnect?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    delete?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    connect?: ReferralMessageWhereUniqueInput | ReferralMessageWhereUniqueInput[]
    update?: ReferralMessageUpdateWithWhereUniqueWithoutReferralInput | ReferralMessageUpdateWithWhereUniqueWithoutReferralInput[]
    updateMany?: ReferralMessageUpdateManyWithWhereWithoutReferralInput | ReferralMessageUpdateManyWithWhereWithoutReferralInput[]
    deleteMany?: ReferralMessageScalarWhereInput | ReferralMessageScalarWhereInput[]
  }

  export type ReferralCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ReferralCreateWithoutMessagesInput, ReferralUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutMessagesInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ReferralCreateWithoutMessagesInput, ReferralUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutMessagesInput
    upsert?: ReferralUpsertWithoutMessagesInput
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutMessagesInput, ReferralUpdateWithoutMessagesInput>, ReferralUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSettlementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementType | EnumSettlementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementType[]
    notIn?: $Enums.SettlementType[]
    not?: NestedEnumSettlementTypeFilter<$PrismaModel> | $Enums.SettlementType
  }

  export type NestedEnumSettlementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementType | EnumSettlementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementType[]
    notIn?: $Enums.SettlementType[]
    not?: NestedEnumSettlementTypeWithAggregatesFilter<$PrismaModel> | $Enums.SettlementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementTypeFilter<$PrismaModel>
    _max?: NestedEnumSettlementTypeFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[]
    notIn?: $Enums.AttendanceType[]
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[]
    notIn?: $Enums.AttendanceType[]
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkerSkillCreateWithoutUserInput = {
    stage: string
    createdAt?: Date | string
  }

  export type WorkerSkillUncheckedCreateWithoutUserInput = {
    id?: number
    stage: string
    createdAt?: Date | string
  }

  export type WorkerSkillCreateOrConnectWithoutUserInput = {
    where: WorkerSkillWhereUniqueInput
    create: XOR<WorkerSkillCreateWithoutUserInput, WorkerSkillUncheckedCreateWithoutUserInput>
  }

  export type WorkerSkillCreateManyUserInputEnvelope = {
    data: WorkerSkillCreateManyUserInput | WorkerSkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkTaskCreateWithoutPickedByUserInput = {
    id: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    roller: RollerCreateNestedOneWithoutWorkTasksInput
  }

  export type WorkTaskUncheckedCreateWithoutPickedByUserInput = {
    id: string
    rollerId: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkTaskCreateOrConnectWithoutPickedByUserInput = {
    where: WorkTaskWhereUniqueInput
    create: XOR<WorkTaskCreateWithoutPickedByUserInput, WorkTaskUncheckedCreateWithoutPickedByUserInput>
  }

  export type WorkTaskCreateManyPickedByUserInputEnvelope = {
    data: WorkTaskCreateManyPickedByUserInput | WorkTaskCreateManyPickedByUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkerSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkerSkillWhereUniqueInput
    update: XOR<WorkerSkillUpdateWithoutUserInput, WorkerSkillUncheckedUpdateWithoutUserInput>
    create: XOR<WorkerSkillCreateWithoutUserInput, WorkerSkillUncheckedCreateWithoutUserInput>
  }

  export type WorkerSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkerSkillWhereUniqueInput
    data: XOR<WorkerSkillUpdateWithoutUserInput, WorkerSkillUncheckedUpdateWithoutUserInput>
  }

  export type WorkerSkillUpdateManyWithWhereWithoutUserInput = {
    where: WorkerSkillScalarWhereInput
    data: XOR<WorkerSkillUpdateManyMutationInput, WorkerSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkerSkillScalarWhereInput = {
    AND?: WorkerSkillScalarWhereInput | WorkerSkillScalarWhereInput[]
    OR?: WorkerSkillScalarWhereInput[]
    NOT?: WorkerSkillScalarWhereInput | WorkerSkillScalarWhereInput[]
    id?: IntFilter<"WorkerSkill"> | number
    userId?: IntFilter<"WorkerSkill"> | number
    stage?: StringFilter<"WorkerSkill"> | string
    createdAt?: DateTimeFilter<"WorkerSkill"> | Date | string
  }

  export type WorkTaskUpsertWithWhereUniqueWithoutPickedByUserInput = {
    where: WorkTaskWhereUniqueInput
    update: XOR<WorkTaskUpdateWithoutPickedByUserInput, WorkTaskUncheckedUpdateWithoutPickedByUserInput>
    create: XOR<WorkTaskCreateWithoutPickedByUserInput, WorkTaskUncheckedCreateWithoutPickedByUserInput>
  }

  export type WorkTaskUpdateWithWhereUniqueWithoutPickedByUserInput = {
    where: WorkTaskWhereUniqueInput
    data: XOR<WorkTaskUpdateWithoutPickedByUserInput, WorkTaskUncheckedUpdateWithoutPickedByUserInput>
  }

  export type WorkTaskUpdateManyWithWhereWithoutPickedByUserInput = {
    where: WorkTaskScalarWhereInput
    data: XOR<WorkTaskUpdateManyMutationInput, WorkTaskUncheckedUpdateManyWithoutPickedByUserInput>
  }

  export type WorkTaskScalarWhereInput = {
    AND?: WorkTaskScalarWhereInput | WorkTaskScalarWhereInput[]
    OR?: WorkTaskScalarWhereInput[]
    NOT?: WorkTaskScalarWhereInput | WorkTaskScalarWhereInput[]
    id?: StringFilter<"WorkTask"> | string
    rollerId?: StringFilter<"WorkTask"> | string
    sequence?: IntFilter<"WorkTask"> | number
    stage?: StringFilter<"WorkTask"> | string
    status?: EnumTaskStatusFilter<"WorkTask"> | $Enums.TaskStatus
    worker?: StringNullableFilter<"WorkTask"> | string | null
    pickedByUserId?: IntNullableFilter<"WorkTask"> | number | null
    availableAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    blockedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    blockedReason?: StringNullableFilter<"WorkTask"> | string | null
    estimatedDays?: IntFilter<"WorkTask"> | number
    dueAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    completedEarly?: BoolFilter<"WorkTask"> | boolean
    delayed?: BoolFilter<"WorkTask"> | boolean
    delayNotified?: BoolFilter<"WorkTask"> | boolean
    delayDetectedAt?: DateTimeNullableFilter<"WorkTask"> | Date | string | null
    updatedAt?: DateTimeFilter<"WorkTask"> | Date | string
    createdAt?: DateTimeFilter<"WorkTask"> | Date | string
  }

  export type AppUserCreateWithoutSkillsInput = {
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickedTasks?: WorkTaskCreateNestedManyWithoutPickedByUserInput
  }

  export type AppUserUncheckedCreateWithoutSkillsInput = {
    id?: number
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickedTasks?: WorkTaskUncheckedCreateNestedManyWithoutPickedByUserInput
  }

  export type AppUserCreateOrConnectWithoutSkillsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutSkillsInput, AppUserUncheckedCreateWithoutSkillsInput>
  }

  export type AppUserUpsertWithoutSkillsInput = {
    update: XOR<AppUserUpdateWithoutSkillsInput, AppUserUncheckedUpdateWithoutSkillsInput>
    create: XOR<AppUserCreateWithoutSkillsInput, AppUserUncheckedCreateWithoutSkillsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutSkillsInput, AppUserUncheckedUpdateWithoutSkillsInput>
  }

  export type AppUserUpdateWithoutSkillsInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedTasks?: WorkTaskUpdateManyWithoutPickedByUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedTasks?: WorkTaskUncheckedUpdateManyWithoutPickedByUserNestedInput
  }

  export type WorkshopOrderCreateWithoutCustomerInput = {
    code: string
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rollers?: RollerCreateNestedManyWithoutWorkshopOrderInput
    satisfactionFeedbacks?: SatisfactionFeedbackCreateNestedManyWithoutOrderInput
  }

  export type WorkshopOrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    code: string
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rollers?: RollerUncheckedCreateNestedManyWithoutWorkshopOrderInput
    satisfactionFeedbacks?: SatisfactionFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type WorkshopOrderCreateOrConnectWithoutCustomerInput = {
    where: WorkshopOrderWhereUniqueInput
    create: XOR<WorkshopOrderCreateWithoutCustomerInput, WorkshopOrderUncheckedCreateWithoutCustomerInput>
  }

  export type WorkshopOrderCreateManyCustomerInputEnvelope = {
    data: WorkshopOrderCreateManyCustomerInput | WorkshopOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type WorkshopOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: WorkshopOrderWhereUniqueInput
    update: XOR<WorkshopOrderUpdateWithoutCustomerInput, WorkshopOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<WorkshopOrderCreateWithoutCustomerInput, WorkshopOrderUncheckedCreateWithoutCustomerInput>
  }

  export type WorkshopOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: WorkshopOrderWhereUniqueInput
    data: XOR<WorkshopOrderUpdateWithoutCustomerInput, WorkshopOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type WorkshopOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: WorkshopOrderScalarWhereInput
    data: XOR<WorkshopOrderUpdateManyMutationInput, WorkshopOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type WorkshopOrderScalarWhereInput = {
    AND?: WorkshopOrderScalarWhereInput | WorkshopOrderScalarWhereInput[]
    OR?: WorkshopOrderScalarWhereInput[]
    NOT?: WorkshopOrderScalarWhereInput | WorkshopOrderScalarWhereInput[]
    id?: IntFilter<"WorkshopOrder"> | number
    code?: StringFilter<"WorkshopOrder"> | string
    customerId?: IntFilter<"WorkshopOrder"> | number
    settlementType?: EnumSettlementTypeFilter<"WorkshopOrder"> | $Enums.SettlementType
    status?: StringFilter<"WorkshopOrder"> | string
    satisfactionStatus?: StringFilter<"WorkshopOrder"> | string
    notes?: StringNullableFilter<"WorkshopOrder"> | string | null
    productionStartedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    productionFinishedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    satisfactionDueAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"WorkshopOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkshopOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkshopOrder"> | Date | string
  }

  export type CustomerCreateWithoutOrdersInput = {
    code: string
    name: string
    phone?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: number
    code: string
    name: string
    phone?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type RollerCreateWithoutWorkshopOrderInput = {
    id: string
    orderCode: string
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    workTasks?: WorkTaskCreateNestedManyWithoutRollerInput
  }

  export type RollerUncheckedCreateWithoutWorkshopOrderInput = {
    id: string
    orderCode: string
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    workTasks?: WorkTaskUncheckedCreateNestedManyWithoutRollerInput
  }

  export type RollerCreateOrConnectWithoutWorkshopOrderInput = {
    where: RollerWhereUniqueInput
    create: XOR<RollerCreateWithoutWorkshopOrderInput, RollerUncheckedCreateWithoutWorkshopOrderInput>
  }

  export type RollerCreateManyWorkshopOrderInputEnvelope = {
    data: RollerCreateManyWorkshopOrderInput | RollerCreateManyWorkshopOrderInput[]
    skipDuplicates?: boolean
  }

  export type SatisfactionFeedbackCreateWithoutOrderInput = {
    result: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type SatisfactionFeedbackUncheckedCreateWithoutOrderInput = {
    id?: number
    result: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type SatisfactionFeedbackCreateOrConnectWithoutOrderInput = {
    where: SatisfactionFeedbackWhereUniqueInput
    create: XOR<SatisfactionFeedbackCreateWithoutOrderInput, SatisfactionFeedbackUncheckedCreateWithoutOrderInput>
  }

  export type SatisfactionFeedbackCreateManyOrderInputEnvelope = {
    data: SatisfactionFeedbackCreateManyOrderInput | SatisfactionFeedbackCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RollerUpsertWithWhereUniqueWithoutWorkshopOrderInput = {
    where: RollerWhereUniqueInput
    update: XOR<RollerUpdateWithoutWorkshopOrderInput, RollerUncheckedUpdateWithoutWorkshopOrderInput>
    create: XOR<RollerCreateWithoutWorkshopOrderInput, RollerUncheckedCreateWithoutWorkshopOrderInput>
  }

  export type RollerUpdateWithWhereUniqueWithoutWorkshopOrderInput = {
    where: RollerWhereUniqueInput
    data: XOR<RollerUpdateWithoutWorkshopOrderInput, RollerUncheckedUpdateWithoutWorkshopOrderInput>
  }

  export type RollerUpdateManyWithWhereWithoutWorkshopOrderInput = {
    where: RollerScalarWhereInput
    data: XOR<RollerUpdateManyMutationInput, RollerUncheckedUpdateManyWithoutWorkshopOrderInput>
  }

  export type RollerScalarWhereInput = {
    AND?: RollerScalarWhereInput | RollerScalarWhereInput[]
    OR?: RollerScalarWhereInput[]
    NOT?: RollerScalarWhereInput | RollerScalarWhereInput[]
    id?: StringFilter<"Roller"> | string
    orderCode?: StringFilter<"Roller"> | string
    workshopOrderId?: IntNullableFilter<"Roller"> | number | null
    stage?: StringFilter<"Roller"> | string
    status?: StringFilter<"Roller"> | string
    ready?: BoolFilter<"Roller"> | boolean
    settled?: BoolFilter<"Roller"> | boolean
    sent?: BoolFilter<"Roller"> | boolean
    settlementRecordedAt?: DateTimeNullableFilter<"Roller"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Roller"> | Date | string | null
    shipmentNote?: StringNullableFilter<"Roller"> | string | null
    diameterMm?: FloatNullableFilter<"Roller"> | number | null
    lengthMm?: FloatNullableFilter<"Roller"> | number | null
    material?: StringNullableFilter<"Roller"> | string | null
    thicknessMm?: FloatNullableFilter<"Roller"> | number | null
    requiredStages?: JsonNullableFilter<"Roller">
    updatedAt?: DateTimeFilter<"Roller"> | Date | string
    createdAt?: DateTimeFilter<"Roller"> | Date | string
  }

  export type SatisfactionFeedbackUpsertWithWhereUniqueWithoutOrderInput = {
    where: SatisfactionFeedbackWhereUniqueInput
    update: XOR<SatisfactionFeedbackUpdateWithoutOrderInput, SatisfactionFeedbackUncheckedUpdateWithoutOrderInput>
    create: XOR<SatisfactionFeedbackCreateWithoutOrderInput, SatisfactionFeedbackUncheckedCreateWithoutOrderInput>
  }

  export type SatisfactionFeedbackUpdateWithWhereUniqueWithoutOrderInput = {
    where: SatisfactionFeedbackWhereUniqueInput
    data: XOR<SatisfactionFeedbackUpdateWithoutOrderInput, SatisfactionFeedbackUncheckedUpdateWithoutOrderInput>
  }

  export type SatisfactionFeedbackUpdateManyWithWhereWithoutOrderInput = {
    where: SatisfactionFeedbackScalarWhereInput
    data: XOR<SatisfactionFeedbackUpdateManyMutationInput, SatisfactionFeedbackUncheckedUpdateManyWithoutOrderInput>
  }

  export type SatisfactionFeedbackScalarWhereInput = {
    AND?: SatisfactionFeedbackScalarWhereInput | SatisfactionFeedbackScalarWhereInput[]
    OR?: SatisfactionFeedbackScalarWhereInput[]
    NOT?: SatisfactionFeedbackScalarWhereInput | SatisfactionFeedbackScalarWhereInput[]
    id?: IntFilter<"SatisfactionFeedback"> | number
    orderId?: IntFilter<"SatisfactionFeedback"> | number
    result?: StringFilter<"SatisfactionFeedback"> | string
    reason?: StringNullableFilter<"SatisfactionFeedback"> | string | null
    createdAt?: DateTimeFilter<"SatisfactionFeedback"> | Date | string
  }

  export type WorkshopOrderCreateWithoutSatisfactionFeedbacksInput = {
    code: string
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    rollers?: RollerCreateNestedManyWithoutWorkshopOrderInput
  }

  export type WorkshopOrderUncheckedCreateWithoutSatisfactionFeedbacksInput = {
    id?: number
    code: string
    customerId: number
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rollers?: RollerUncheckedCreateNestedManyWithoutWorkshopOrderInput
  }

  export type WorkshopOrderCreateOrConnectWithoutSatisfactionFeedbacksInput = {
    where: WorkshopOrderWhereUniqueInput
    create: XOR<WorkshopOrderCreateWithoutSatisfactionFeedbacksInput, WorkshopOrderUncheckedCreateWithoutSatisfactionFeedbacksInput>
  }

  export type WorkshopOrderUpsertWithoutSatisfactionFeedbacksInput = {
    update: XOR<WorkshopOrderUpdateWithoutSatisfactionFeedbacksInput, WorkshopOrderUncheckedUpdateWithoutSatisfactionFeedbacksInput>
    create: XOR<WorkshopOrderCreateWithoutSatisfactionFeedbacksInput, WorkshopOrderUncheckedCreateWithoutSatisfactionFeedbacksInput>
    where?: WorkshopOrderWhereInput
  }

  export type WorkshopOrderUpdateToOneWithWhereWithoutSatisfactionFeedbacksInput = {
    where?: WorkshopOrderWhereInput
    data: XOR<WorkshopOrderUpdateWithoutSatisfactionFeedbacksInput, WorkshopOrderUncheckedUpdateWithoutSatisfactionFeedbacksInput>
  }

  export type WorkshopOrderUpdateWithoutSatisfactionFeedbacksInput = {
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    rollers?: RollerUpdateManyWithoutWorkshopOrderNestedInput
  }

  export type WorkshopOrderUncheckedUpdateWithoutSatisfactionFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rollers?: RollerUncheckedUpdateManyWithoutWorkshopOrderNestedInput
  }

  export type RollerCreateWithoutWorkTasksInput = {
    id: string
    orderCode: string
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    workshopOrder?: WorkshopOrderCreateNestedOneWithoutRollersInput
  }

  export type RollerUncheckedCreateWithoutWorkTasksInput = {
    id: string
    orderCode: string
    workshopOrderId?: number | null
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type RollerCreateOrConnectWithoutWorkTasksInput = {
    where: RollerWhereUniqueInput
    create: XOR<RollerCreateWithoutWorkTasksInput, RollerUncheckedCreateWithoutWorkTasksInput>
  }

  export type AppUserCreateWithoutPickedTasksInput = {
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: WorkerSkillCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutPickedTasksInput = {
    id?: number
    username: string
    passwordHash: string
    fullName: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    active?: boolean
    phone?: string | null
    baleUserId?: string | null
    profileImageUrl?: string | null
    notes?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: WorkerSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutPickedTasksInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutPickedTasksInput, AppUserUncheckedCreateWithoutPickedTasksInput>
  }

  export type RollerUpsertWithoutWorkTasksInput = {
    update: XOR<RollerUpdateWithoutWorkTasksInput, RollerUncheckedUpdateWithoutWorkTasksInput>
    create: XOR<RollerCreateWithoutWorkTasksInput, RollerUncheckedCreateWithoutWorkTasksInput>
    where?: RollerWhereInput
  }

  export type RollerUpdateToOneWithWhereWithoutWorkTasksInput = {
    where?: RollerWhereInput
    data: XOR<RollerUpdateWithoutWorkTasksInput, RollerUncheckedUpdateWithoutWorkTasksInput>
  }

  export type RollerUpdateWithoutWorkTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopOrder?: WorkshopOrderUpdateOneWithoutRollersNestedInput
  }

  export type RollerUncheckedUpdateWithoutWorkTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    workshopOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserUpsertWithoutPickedTasksInput = {
    update: XOR<AppUserUpdateWithoutPickedTasksInput, AppUserUncheckedUpdateWithoutPickedTasksInput>
    create: XOR<AppUserCreateWithoutPickedTasksInput, AppUserUncheckedCreateWithoutPickedTasksInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutPickedTasksInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutPickedTasksInput, AppUserUncheckedUpdateWithoutPickedTasksInput>
  }

  export type AppUserUpdateWithoutPickedTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: WorkerSkillUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutPickedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    baleUserId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: WorkerSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkshopOrderCreateWithoutRollersInput = {
    code: string
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    satisfactionFeedbacks?: SatisfactionFeedbackCreateNestedManyWithoutOrderInput
  }

  export type WorkshopOrderUncheckedCreateWithoutRollersInput = {
    id?: number
    code: string
    customerId: number
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    satisfactionFeedbacks?: SatisfactionFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type WorkshopOrderCreateOrConnectWithoutRollersInput = {
    where: WorkshopOrderWhereUniqueInput
    create: XOR<WorkshopOrderCreateWithoutRollersInput, WorkshopOrderUncheckedCreateWithoutRollersInput>
  }

  export type WorkTaskCreateWithoutRollerInput = {
    id: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    pickedByUser?: AppUserCreateNestedOneWithoutPickedTasksInput
  }

  export type WorkTaskUncheckedCreateWithoutRollerInput = {
    id: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    pickedByUserId?: number | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkTaskCreateOrConnectWithoutRollerInput = {
    where: WorkTaskWhereUniqueInput
    create: XOR<WorkTaskCreateWithoutRollerInput, WorkTaskUncheckedCreateWithoutRollerInput>
  }

  export type WorkTaskCreateManyRollerInputEnvelope = {
    data: WorkTaskCreateManyRollerInput | WorkTaskCreateManyRollerInput[]
    skipDuplicates?: boolean
  }

  export type WorkshopOrderUpsertWithoutRollersInput = {
    update: XOR<WorkshopOrderUpdateWithoutRollersInput, WorkshopOrderUncheckedUpdateWithoutRollersInput>
    create: XOR<WorkshopOrderCreateWithoutRollersInput, WorkshopOrderUncheckedCreateWithoutRollersInput>
    where?: WorkshopOrderWhereInput
  }

  export type WorkshopOrderUpdateToOneWithWhereWithoutRollersInput = {
    where?: WorkshopOrderWhereInput
    data: XOR<WorkshopOrderUpdateWithoutRollersInput, WorkshopOrderUncheckedUpdateWithoutRollersInput>
  }

  export type WorkshopOrderUpdateWithoutRollersInput = {
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    satisfactionFeedbacks?: SatisfactionFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type WorkshopOrderUncheckedUpdateWithoutRollersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    satisfactionFeedbacks?: SatisfactionFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type WorkTaskUpsertWithWhereUniqueWithoutRollerInput = {
    where: WorkTaskWhereUniqueInput
    update: XOR<WorkTaskUpdateWithoutRollerInput, WorkTaskUncheckedUpdateWithoutRollerInput>
    create: XOR<WorkTaskCreateWithoutRollerInput, WorkTaskUncheckedCreateWithoutRollerInput>
  }

  export type WorkTaskUpdateWithWhereUniqueWithoutRollerInput = {
    where: WorkTaskWhereUniqueInput
    data: XOR<WorkTaskUpdateWithoutRollerInput, WorkTaskUncheckedUpdateWithoutRollerInput>
  }

  export type WorkTaskUpdateManyWithWhereWithoutRollerInput = {
    where: WorkTaskScalarWhereInput
    data: XOR<WorkTaskUpdateManyMutationInput, WorkTaskUncheckedUpdateManyWithoutRollerInput>
  }

  export type ReferralMessageCreateWithoutReferralInput = {
    authorRole: string
    authorName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ReferralMessageUncheckedCreateWithoutReferralInput = {
    id?: number
    authorRole: string
    authorName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ReferralMessageCreateOrConnectWithoutReferralInput = {
    where: ReferralMessageWhereUniqueInput
    create: XOR<ReferralMessageCreateWithoutReferralInput, ReferralMessageUncheckedCreateWithoutReferralInput>
  }

  export type ReferralMessageCreateManyReferralInputEnvelope = {
    data: ReferralMessageCreateManyReferralInput | ReferralMessageCreateManyReferralInput[]
    skipDuplicates?: boolean
  }

  export type ReferralMessageUpsertWithWhereUniqueWithoutReferralInput = {
    where: ReferralMessageWhereUniqueInput
    update: XOR<ReferralMessageUpdateWithoutReferralInput, ReferralMessageUncheckedUpdateWithoutReferralInput>
    create: XOR<ReferralMessageCreateWithoutReferralInput, ReferralMessageUncheckedCreateWithoutReferralInput>
  }

  export type ReferralMessageUpdateWithWhereUniqueWithoutReferralInput = {
    where: ReferralMessageWhereUniqueInput
    data: XOR<ReferralMessageUpdateWithoutReferralInput, ReferralMessageUncheckedUpdateWithoutReferralInput>
  }

  export type ReferralMessageUpdateManyWithWhereWithoutReferralInput = {
    where: ReferralMessageScalarWhereInput
    data: XOR<ReferralMessageUpdateManyMutationInput, ReferralMessageUncheckedUpdateManyWithoutReferralInput>
  }

  export type ReferralMessageScalarWhereInput = {
    AND?: ReferralMessageScalarWhereInput | ReferralMessageScalarWhereInput[]
    OR?: ReferralMessageScalarWhereInput[]
    NOT?: ReferralMessageScalarWhereInput | ReferralMessageScalarWhereInput[]
    id?: IntFilter<"ReferralMessage"> | number
    referralId?: IntFilter<"ReferralMessage"> | number
    authorRole?: StringFilter<"ReferralMessage"> | string
    authorName?: StringNullableFilter<"ReferralMessage"> | string | null
    message?: StringFilter<"ReferralMessage"> | string
    createdAt?: DateTimeFilter<"ReferralMessage"> | Date | string
  }

  export type ReferralCreateWithoutMessagesInput = {
    title: string
    description: string
    targetRole: string
    sourceRole?: string
    sourceType?: string | null
    sourceId?: string | null
    orderCode?: string | null
    rollerId?: string | null
    taskId?: string | null
    issueId?: number | null
    status?: string
    priority?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUncheckedCreateWithoutMessagesInput = {
    id?: number
    title: string
    description: string
    targetRole: string
    sourceRole?: string
    sourceType?: string | null
    sourceId?: string | null
    orderCode?: string | null
    rollerId?: string | null
    taskId?: string | null
    issueId?: number | null
    status?: string
    priority?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutMessagesInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutMessagesInput, ReferralUncheckedCreateWithoutMessagesInput>
  }

  export type ReferralUpsertWithoutMessagesInput = {
    update: XOR<ReferralUpdateWithoutMessagesInput, ReferralUncheckedUpdateWithoutMessagesInput>
    create: XOR<ReferralCreateWithoutMessagesInput, ReferralUncheckedCreateWithoutMessagesInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutMessagesInput, ReferralUncheckedUpdateWithoutMessagesInput>
  }

  export type ReferralUpdateWithoutMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderCode?: NullableStringFieldUpdateOperationsInput | string | null
    rollerId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    issueId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetRole?: StringFieldUpdateOperationsInput | string
    sourceRole?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderCode?: NullableStringFieldUpdateOperationsInput | string | null
    rollerId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    issueId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerSkillCreateManyUserInput = {
    id?: number
    stage: string
    createdAt?: Date | string
  }

  export type WorkTaskCreateManyPickedByUserInput = {
    id: string
    rollerId: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkerSkillUpdateWithoutUserInput = {
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerSkillUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerSkillUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskUpdateWithoutPickedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roller?: RollerUpdateOneRequiredWithoutWorkTasksNestedInput
  }

  export type WorkTaskUncheckedUpdateWithoutPickedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollerId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskUncheckedUpdateManyWithoutPickedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollerId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopOrderCreateManyCustomerInput = {
    id?: number
    code: string
    settlementType?: $Enums.SettlementType
    status?: string
    satisfactionStatus?: string
    notes?: string | null
    productionStartedAt?: Date | string | null
    productionFinishedAt?: Date | string | null
    deliveredAt?: Date | string | null
    satisfactionDueAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopOrderUpdateWithoutCustomerInput = {
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rollers?: RollerUpdateManyWithoutWorkshopOrderNestedInput
    satisfactionFeedbacks?: SatisfactionFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type WorkshopOrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rollers?: RollerUncheckedUpdateManyWithoutWorkshopOrderNestedInput
    satisfactionFeedbacks?: SatisfactionFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type WorkshopOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    settlementType?: EnumSettlementTypeFieldUpdateOperationsInput | $Enums.SettlementType
    status?: StringFieldUpdateOperationsInput | string
    satisfactionStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productionStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productionFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satisfactionDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RollerCreateManyWorkshopOrderInput = {
    id: string
    orderCode: string
    stage: string
    status: string
    ready?: boolean
    settled?: boolean
    sent?: boolean
    settlementRecordedAt?: Date | string | null
    sentAt?: Date | string | null
    shipmentNote?: string | null
    diameterMm?: number | null
    lengthMm?: number | null
    material?: string | null
    thicknessMm?: number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SatisfactionFeedbackCreateManyOrderInput = {
    id?: number
    result: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type RollerUpdateWithoutWorkshopOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: WorkTaskUpdateManyWithoutRollerNestedInput
  }

  export type RollerUncheckedUpdateWithoutWorkshopOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: WorkTaskUncheckedUpdateManyWithoutRollerNestedInput
  }

  export type RollerUncheckedUpdateManyWithoutWorkshopOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    settled?: BoolFieldUpdateOperationsInput | boolean
    sent?: BoolFieldUpdateOperationsInput | boolean
    settlementRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: NullableFloatFieldUpdateOperationsInput | number | null
    lengthMm?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    thicknessMm?: NullableFloatFieldUpdateOperationsInput | number | null
    requiredStages?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatisfactionFeedbackUpdateWithoutOrderInput = {
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatisfactionFeedbackUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatisfactionFeedbackUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskCreateManyRollerInput = {
    id: string
    sequence?: number
    stage: string
    status?: $Enums.TaskStatus
    worker?: string | null
    pickedByUserId?: number | null
    availableAt?: Date | string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    blockedAt?: Date | string | null
    blockedReason?: string | null
    estimatedDays?: number
    dueAt?: Date | string | null
    completedEarly?: boolean
    delayed?: boolean
    delayNotified?: boolean
    delayDetectedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkTaskUpdateWithoutRollerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedByUser?: AppUserUpdateOneWithoutPickedTasksNestedInput
  }

  export type WorkTaskUncheckedUpdateWithoutRollerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    pickedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTaskUncheckedUpdateManyWithoutRollerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    worker?: NullableStringFieldUpdateOperationsInput | string | null
    pickedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    availableAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedEarly?: BoolFieldUpdateOperationsInput | boolean
    delayed?: BoolFieldUpdateOperationsInput | boolean
    delayNotified?: BoolFieldUpdateOperationsInput | boolean
    delayDetectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralMessageCreateManyReferralInput = {
    id?: number
    authorRole: string
    authorName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ReferralMessageUpdateWithoutReferralInput = {
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralMessageUncheckedUpdateWithoutReferralInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralMessageUncheckedUpdateManyWithoutReferralInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorRole?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}