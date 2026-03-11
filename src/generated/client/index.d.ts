
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model SavedMoment
 * 
 */
export type SavedMoment = $Result.DefaultSelection<Prisma.$SavedMomentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model GlobalSettings
 * 
 */
export type GlobalSettings = $Result.DefaultSelection<Prisma.$GlobalSettingsPayload>
/**
 * Model VideoClipCount
 * 
 */
export type VideoClipCount = $Result.DefaultSelection<Prisma.$VideoClipCountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.savedMoment`: Exposes CRUD operations for the **SavedMoment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedMoments
    * const savedMoments = await prisma.savedMoment.findMany()
    * ```
    */
  get savedMoment(): Prisma.SavedMomentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalSettings`: Exposes CRUD operations for the **GlobalSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalSettings
    * const globalSettings = await prisma.globalSettings.findMany()
    * ```
    */
  get globalSettings(): Prisma.GlobalSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoClipCount`: Exposes CRUD operations for the **VideoClipCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoClipCounts
    * const videoClipCounts = await prisma.videoClipCount.findMany()
    * ```
    */
  get videoClipCount(): Prisma.VideoClipCountDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    AppUser: 'AppUser',
    SavedMoment: 'SavedMoment',
    Admin: 'Admin',
    GlobalSettings: 'GlobalSettings',
    VideoClipCount: 'VideoClipCount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appUser" | "savedMoment" | "admin" | "globalSettings" | "videoClipCount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.AppUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.AppUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
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
      SavedMoment: {
        payload: Prisma.$SavedMomentPayload<ExtArgs>
        fields: Prisma.SavedMomentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedMomentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedMomentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>
          }
          findFirst: {
            args: Prisma.SavedMomentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedMomentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>
          }
          findMany: {
            args: Prisma.SavedMomentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>[]
          }
          create: {
            args: Prisma.SavedMomentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>
          }
          createMany: {
            args: Prisma.SavedMomentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedMomentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>[]
          }
          delete: {
            args: Prisma.SavedMomentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>
          }
          update: {
            args: Prisma.SavedMomentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>
          }
          deleteMany: {
            args: Prisma.SavedMomentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedMomentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedMomentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>[]
          }
          upsert: {
            args: Prisma.SavedMomentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMomentPayload>
          }
          aggregate: {
            args: Prisma.SavedMomentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedMoment>
          }
          groupBy: {
            args: Prisma.SavedMomentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedMomentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedMomentCountArgs<ExtArgs>
            result: $Utils.Optional<SavedMomentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      GlobalSettings: {
        payload: Prisma.$GlobalSettingsPayload<ExtArgs>
        fields: Prisma.GlobalSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          findFirst: {
            args: Prisma.GlobalSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          findMany: {
            args: Prisma.GlobalSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          create: {
            args: Prisma.GlobalSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          createMany: {
            args: Prisma.GlobalSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          delete: {
            args: Prisma.GlobalSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          update: {
            args: Prisma.GlobalSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          deleteMany: {
            args: Prisma.GlobalSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          upsert: {
            args: Prisma.GlobalSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          aggregate: {
            args: Prisma.GlobalSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalSettings>
          }
          groupBy: {
            args: Prisma.GlobalSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingsCountAggregateOutputType> | number
          }
        }
      }
      VideoClipCount: {
        payload: Prisma.$VideoClipCountPayload<ExtArgs>
        fields: Prisma.VideoClipCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoClipCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoClipCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>
          }
          findFirst: {
            args: Prisma.VideoClipCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoClipCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>
          }
          findMany: {
            args: Prisma.VideoClipCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>[]
          }
          create: {
            args: Prisma.VideoClipCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>
          }
          createMany: {
            args: Prisma.VideoClipCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoClipCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>[]
          }
          delete: {
            args: Prisma.VideoClipCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>
          }
          update: {
            args: Prisma.VideoClipCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>
          }
          deleteMany: {
            args: Prisma.VideoClipCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoClipCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoClipCountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>[]
          }
          upsert: {
            args: Prisma.VideoClipCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipCountPayload>
          }
          aggregate: {
            args: Prisma.VideoClipCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoClipCount>
          }
          groupBy: {
            args: Prisma.VideoClipCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoClipCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoClipCountCountArgs<ExtArgs>
            result: $Utils.Optional<VideoClipCountCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    appUser?: AppUserOmit
    savedMoment?: SavedMomentOmit
    admin?: AdminOmit
    globalSettings?: GlobalSettingsOmit
    videoClipCount?: VideoClipCountOmit
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
    videoClipCounts: number
    savedMoments: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoClipCounts?: boolean | AppUserCountOutputTypeCountVideoClipCountsArgs
    savedMoments?: boolean | AppUserCountOutputTypeCountSavedMomentsArgs
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
  export type AppUserCountOutputTypeCountVideoClipCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoClipCountWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountSavedMomentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedMomentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    tiktokUsername: string | null
    tiktokLink: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    tiktokUsername: string | null
    tiktokLink: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    tiktokUsername: number
    tiktokLink: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    tiktokUsername?: true
    tiktokLink?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    tiktokUsername?: true
    tiktokLink?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    tiktokUsername?: true
    tiktokLink?: true
    status?: true
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
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: string
    username: string
    password: string
    tiktokUsername: string | null
    tiktokLink: string
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: AppUserCountAggregateOutputType | null
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
    password?: boolean
    tiktokUsername?: boolean
    tiktokLink?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoClipCounts?: boolean | AppUser$videoClipCountsArgs<ExtArgs>
    savedMoments?: boolean | AppUser$savedMomentsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    tiktokUsername?: boolean
    tiktokLink?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    tiktokUsername?: boolean
    tiktokLink?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    tiktokUsername?: boolean
    tiktokLink?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "tiktokUsername" | "tiktokLink" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["appUser"]>
  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoClipCounts?: boolean | AppUser$videoClipCountsArgs<ExtArgs>
    savedMoments?: boolean | AppUser$savedMomentsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      videoClipCounts: Prisma.$VideoClipCountPayload<ExtArgs>[]
      savedMoments: Prisma.$SavedMomentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      tiktokUsername: string | null
      tiktokLink: string
      status: $Enums.UserStatus
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
     * Create many AppUsers and returns the data saved in the database.
     * @param {AppUserCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AppUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more AppUsers and returns the data updated in the database.
     * @param {AppUserUpdateManyAndReturnArgs} args - Arguments to update many AppUsers.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AppUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    videoClipCounts<T extends AppUser$videoClipCountsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$videoClipCountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedMoments<T extends AppUser$savedMomentsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$savedMomentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"AppUser", 'String'>
    readonly username: FieldRef<"AppUser", 'String'>
    readonly password: FieldRef<"AppUser", 'String'>
    readonly tiktokUsername: FieldRef<"AppUser", 'String'>
    readonly tiktokLink: FieldRef<"AppUser", 'String'>
    readonly status: FieldRef<"AppUser", 'UserStatus'>
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
   * AppUser createManyAndReturn
   */
  export type AppUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
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
   * AppUser updateManyAndReturn
   */
  export type AppUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
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
   * AppUser.videoClipCounts
   */
  export type AppUser$videoClipCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    where?: VideoClipCountWhereInput
    orderBy?: VideoClipCountOrderByWithRelationInput | VideoClipCountOrderByWithRelationInput[]
    cursor?: VideoClipCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoClipCountScalarFieldEnum | VideoClipCountScalarFieldEnum[]
  }

  /**
   * AppUser.savedMoments
   */
  export type AppUser$savedMomentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    where?: SavedMomentWhereInput
    orderBy?: SavedMomentOrderByWithRelationInput | SavedMomentOrderByWithRelationInput[]
    cursor?: SavedMomentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedMomentScalarFieldEnum | SavedMomentScalarFieldEnum[]
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
   * Model SavedMoment
   */

  export type AggregateSavedMoment = {
    _count: SavedMomentCountAggregateOutputType | null
    _avg: SavedMomentAvgAggregateOutputType | null
    _sum: SavedMomentSumAggregateOutputType | null
    _min: SavedMomentMinAggregateOutputType | null
    _max: SavedMomentMaxAggregateOutputType | null
  }

  export type SavedMomentAvgAggregateOutputType = {
    startTime: number | null
    endTime: number | null
  }

  export type SavedMomentSumAggregateOutputType = {
    startTime: number | null
    endTime: number | null
  }

  export type SavedMomentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    label: string | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedMomentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    label: string | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedMomentCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    label: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavedMomentAvgAggregateInputType = {
    startTime?: true
    endTime?: true
  }

  export type SavedMomentSumAggregateInputType = {
    startTime?: true
    endTime?: true
  }

  export type SavedMomentMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    label?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedMomentMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    label?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedMomentCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    label?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavedMomentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedMoment to aggregate.
     */
    where?: SavedMomentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMoments to fetch.
     */
    orderBy?: SavedMomentOrderByWithRelationInput | SavedMomentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedMomentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMoments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMoments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedMoments
    **/
    _count?: true | SavedMomentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedMomentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedMomentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedMomentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedMomentMaxAggregateInputType
  }

  export type GetSavedMomentAggregateType<T extends SavedMomentAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedMoment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedMoment[P]>
      : GetScalarType<T[P], AggregateSavedMoment[P]>
  }




  export type SavedMomentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedMomentWhereInput
    orderBy?: SavedMomentOrderByWithAggregationInput | SavedMomentOrderByWithAggregationInput[]
    by: SavedMomentScalarFieldEnum[] | SavedMomentScalarFieldEnum
    having?: SavedMomentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedMomentCountAggregateInputType | true
    _avg?: SavedMomentAvgAggregateInputType
    _sum?: SavedMomentSumAggregateInputType
    _min?: SavedMomentMinAggregateInputType
    _max?: SavedMomentMaxAggregateInputType
  }

  export type SavedMomentGroupByOutputType = {
    id: string
    userId: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt: Date
    updatedAt: Date
    _count: SavedMomentCountAggregateOutputType | null
    _avg: SavedMomentAvgAggregateOutputType | null
    _sum: SavedMomentSumAggregateOutputType | null
    _min: SavedMomentMinAggregateOutputType | null
    _max: SavedMomentMaxAggregateOutputType | null
  }

  type GetSavedMomentGroupByPayload<T extends SavedMomentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedMomentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedMomentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedMomentGroupByOutputType[P]>
            : GetScalarType<T[P], SavedMomentGroupByOutputType[P]>
        }
      >
    >


  export type SavedMomentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedMoment"]>

  export type SavedMomentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedMoment"]>

  export type SavedMomentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedMoment"]>

  export type SavedMomentSelectScalar = {
    id?: boolean
    userId?: boolean
    videoId?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SavedMomentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "videoId" | "label" | "startTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["savedMoment"]>
  export type SavedMomentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type SavedMomentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type SavedMomentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $SavedMomentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedMoment"
    objects: {
      user: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      videoId: string
      label: string
      startTime: number
      endTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savedMoment"]>
    composites: {}
  }

  type SavedMomentGetPayload<S extends boolean | null | undefined | SavedMomentDefaultArgs> = $Result.GetResult<Prisma.$SavedMomentPayload, S>

  type SavedMomentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedMomentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedMomentCountAggregateInputType | true
    }

  export interface SavedMomentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedMoment'], meta: { name: 'SavedMoment' } }
    /**
     * Find zero or one SavedMoment that matches the filter.
     * @param {SavedMomentFindUniqueArgs} args - Arguments to find a SavedMoment
     * @example
     * // Get one SavedMoment
     * const savedMoment = await prisma.savedMoment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedMomentFindUniqueArgs>(args: SelectSubset<T, SavedMomentFindUniqueArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedMoment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedMomentFindUniqueOrThrowArgs} args - Arguments to find a SavedMoment
     * @example
     * // Get one SavedMoment
     * const savedMoment = await prisma.savedMoment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedMomentFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedMomentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedMoment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentFindFirstArgs} args - Arguments to find a SavedMoment
     * @example
     * // Get one SavedMoment
     * const savedMoment = await prisma.savedMoment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedMomentFindFirstArgs>(args?: SelectSubset<T, SavedMomentFindFirstArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedMoment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentFindFirstOrThrowArgs} args - Arguments to find a SavedMoment
     * @example
     * // Get one SavedMoment
     * const savedMoment = await prisma.savedMoment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedMomentFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedMomentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedMoments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedMoments
     * const savedMoments = await prisma.savedMoment.findMany()
     * 
     * // Get first 10 SavedMoments
     * const savedMoments = await prisma.savedMoment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedMomentWithIdOnly = await prisma.savedMoment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedMomentFindManyArgs>(args?: SelectSubset<T, SavedMomentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedMoment.
     * @param {SavedMomentCreateArgs} args - Arguments to create a SavedMoment.
     * @example
     * // Create one SavedMoment
     * const SavedMoment = await prisma.savedMoment.create({
     *   data: {
     *     // ... data to create a SavedMoment
     *   }
     * })
     * 
     */
    create<T extends SavedMomentCreateArgs>(args: SelectSubset<T, SavedMomentCreateArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedMoments.
     * @param {SavedMomentCreateManyArgs} args - Arguments to create many SavedMoments.
     * @example
     * // Create many SavedMoments
     * const savedMoment = await prisma.savedMoment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedMomentCreateManyArgs>(args?: SelectSubset<T, SavedMomentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedMoments and returns the data saved in the database.
     * @param {SavedMomentCreateManyAndReturnArgs} args - Arguments to create many SavedMoments.
     * @example
     * // Create many SavedMoments
     * const savedMoment = await prisma.savedMoment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedMoments and only return the `id`
     * const savedMomentWithIdOnly = await prisma.savedMoment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedMomentCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedMomentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedMoment.
     * @param {SavedMomentDeleteArgs} args - Arguments to delete one SavedMoment.
     * @example
     * // Delete one SavedMoment
     * const SavedMoment = await prisma.savedMoment.delete({
     *   where: {
     *     // ... filter to delete one SavedMoment
     *   }
     * })
     * 
     */
    delete<T extends SavedMomentDeleteArgs>(args: SelectSubset<T, SavedMomentDeleteArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedMoment.
     * @param {SavedMomentUpdateArgs} args - Arguments to update one SavedMoment.
     * @example
     * // Update one SavedMoment
     * const savedMoment = await prisma.savedMoment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedMomentUpdateArgs>(args: SelectSubset<T, SavedMomentUpdateArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedMoments.
     * @param {SavedMomentDeleteManyArgs} args - Arguments to filter SavedMoments to delete.
     * @example
     * // Delete a few SavedMoments
     * const { count } = await prisma.savedMoment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedMomentDeleteManyArgs>(args?: SelectSubset<T, SavedMomentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedMoments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedMoments
     * const savedMoment = await prisma.savedMoment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedMomentUpdateManyArgs>(args: SelectSubset<T, SavedMomentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedMoments and returns the data updated in the database.
     * @param {SavedMomentUpdateManyAndReturnArgs} args - Arguments to update many SavedMoments.
     * @example
     * // Update many SavedMoments
     * const savedMoment = await prisma.savedMoment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedMoments and only return the `id`
     * const savedMomentWithIdOnly = await prisma.savedMoment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedMomentUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedMomentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedMoment.
     * @param {SavedMomentUpsertArgs} args - Arguments to update or create a SavedMoment.
     * @example
     * // Update or create a SavedMoment
     * const savedMoment = await prisma.savedMoment.upsert({
     *   create: {
     *     // ... data to create a SavedMoment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedMoment we want to update
     *   }
     * })
     */
    upsert<T extends SavedMomentUpsertArgs>(args: SelectSubset<T, SavedMomentUpsertArgs<ExtArgs>>): Prisma__SavedMomentClient<$Result.GetResult<Prisma.$SavedMomentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedMoments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentCountArgs} args - Arguments to filter SavedMoments to count.
     * @example
     * // Count the number of SavedMoments
     * const count = await prisma.savedMoment.count({
     *   where: {
     *     // ... the filter for the SavedMoments we want to count
     *   }
     * })
    **/
    count<T extends SavedMomentCountArgs>(
      args?: Subset<T, SavedMomentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedMomentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedMoment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedMomentAggregateArgs>(args: Subset<T, SavedMomentAggregateArgs>): Prisma.PrismaPromise<GetSavedMomentAggregateType<T>>

    /**
     * Group by SavedMoment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMomentGroupByArgs} args - Group by arguments.
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
      T extends SavedMomentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedMomentGroupByArgs['orderBy'] }
        : { orderBy?: SavedMomentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedMomentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedMomentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedMoment model
   */
  readonly fields: SavedMomentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedMoment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedMomentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SavedMoment model
   */
  interface SavedMomentFieldRefs {
    readonly id: FieldRef<"SavedMoment", 'String'>
    readonly userId: FieldRef<"SavedMoment", 'String'>
    readonly videoId: FieldRef<"SavedMoment", 'String'>
    readonly label: FieldRef<"SavedMoment", 'String'>
    readonly startTime: FieldRef<"SavedMoment", 'Float'>
    readonly endTime: FieldRef<"SavedMoment", 'Float'>
    readonly createdAt: FieldRef<"SavedMoment", 'DateTime'>
    readonly updatedAt: FieldRef<"SavedMoment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedMoment findUnique
   */
  export type SavedMomentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * Filter, which SavedMoment to fetch.
     */
    where: SavedMomentWhereUniqueInput
  }

  /**
   * SavedMoment findUniqueOrThrow
   */
  export type SavedMomentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * Filter, which SavedMoment to fetch.
     */
    where: SavedMomentWhereUniqueInput
  }

  /**
   * SavedMoment findFirst
   */
  export type SavedMomentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * Filter, which SavedMoment to fetch.
     */
    where?: SavedMomentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMoments to fetch.
     */
    orderBy?: SavedMomentOrderByWithRelationInput | SavedMomentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedMoments.
     */
    cursor?: SavedMomentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMoments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMoments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedMoments.
     */
    distinct?: SavedMomentScalarFieldEnum | SavedMomentScalarFieldEnum[]
  }

  /**
   * SavedMoment findFirstOrThrow
   */
  export type SavedMomentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * Filter, which SavedMoment to fetch.
     */
    where?: SavedMomentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMoments to fetch.
     */
    orderBy?: SavedMomentOrderByWithRelationInput | SavedMomentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedMoments.
     */
    cursor?: SavedMomentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMoments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMoments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedMoments.
     */
    distinct?: SavedMomentScalarFieldEnum | SavedMomentScalarFieldEnum[]
  }

  /**
   * SavedMoment findMany
   */
  export type SavedMomentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * Filter, which SavedMoments to fetch.
     */
    where?: SavedMomentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMoments to fetch.
     */
    orderBy?: SavedMomentOrderByWithRelationInput | SavedMomentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedMoments.
     */
    cursor?: SavedMomentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMoments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMoments.
     */
    skip?: number
    distinct?: SavedMomentScalarFieldEnum | SavedMomentScalarFieldEnum[]
  }

  /**
   * SavedMoment create
   */
  export type SavedMomentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedMoment.
     */
    data: XOR<SavedMomentCreateInput, SavedMomentUncheckedCreateInput>
  }

  /**
   * SavedMoment createMany
   */
  export type SavedMomentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedMoments.
     */
    data: SavedMomentCreateManyInput | SavedMomentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedMoment createManyAndReturn
   */
  export type SavedMomentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * The data used to create many SavedMoments.
     */
    data: SavedMomentCreateManyInput | SavedMomentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedMoment update
   */
  export type SavedMomentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedMoment.
     */
    data: XOR<SavedMomentUpdateInput, SavedMomentUncheckedUpdateInput>
    /**
     * Choose, which SavedMoment to update.
     */
    where: SavedMomentWhereUniqueInput
  }

  /**
   * SavedMoment updateMany
   */
  export type SavedMomentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedMoments.
     */
    data: XOR<SavedMomentUpdateManyMutationInput, SavedMomentUncheckedUpdateManyInput>
    /**
     * Filter which SavedMoments to update
     */
    where?: SavedMomentWhereInput
    /**
     * Limit how many SavedMoments to update.
     */
    limit?: number
  }

  /**
   * SavedMoment updateManyAndReturn
   */
  export type SavedMomentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * The data used to update SavedMoments.
     */
    data: XOR<SavedMomentUpdateManyMutationInput, SavedMomentUncheckedUpdateManyInput>
    /**
     * Filter which SavedMoments to update
     */
    where?: SavedMomentWhereInput
    /**
     * Limit how many SavedMoments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedMoment upsert
   */
  export type SavedMomentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedMoment to update in case it exists.
     */
    where: SavedMomentWhereUniqueInput
    /**
     * In case the SavedMoment found by the `where` argument doesn't exist, create a new SavedMoment with this data.
     */
    create: XOR<SavedMomentCreateInput, SavedMomentUncheckedCreateInput>
    /**
     * In case the SavedMoment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedMomentUpdateInput, SavedMomentUncheckedUpdateInput>
  }

  /**
   * SavedMoment delete
   */
  export type SavedMomentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
    /**
     * Filter which SavedMoment to delete.
     */
    where: SavedMomentWhereUniqueInput
  }

  /**
   * SavedMoment deleteMany
   */
  export type SavedMomentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedMoments to delete
     */
    where?: SavedMomentWhereInput
    /**
     * Limit how many SavedMoments to delete.
     */
    limit?: number
  }

  /**
   * SavedMoment without action
   */
  export type SavedMomentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMoment
     */
    select?: SavedMomentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedMoment
     */
    omit?: SavedMomentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMomentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model GlobalSettings
   */

  export type AggregateGlobalSettings = {
    _count: GlobalSettingsCountAggregateOutputType | null
    _avg: GlobalSettingsAvgAggregateOutputType | null
    _sum: GlobalSettingsSumAggregateOutputType | null
    _min: GlobalSettingsMinAggregateOutputType | null
    _max: GlobalSettingsMaxAggregateOutputType | null
  }

  export type GlobalSettingsAvgAggregateOutputType = {
    minClipDuration: number | null
    maxClipDuration: number | null
    maxClipsPerVideo: number | null
  }

  export type GlobalSettingsSumAggregateOutputType = {
    minClipDuration: number | null
    maxClipDuration: number | null
    maxClipsPerVideo: number | null
  }

  export type GlobalSettingsMinAggregateOutputType = {
    id: string | null
    minClipDuration: number | null
    maxClipDuration: number | null
    maxClipsPerVideo: number | null
    updatedAt: Date | null
    maintenanceMode: boolean | null
  }

  export type GlobalSettingsMaxAggregateOutputType = {
    id: string | null
    minClipDuration: number | null
    maxClipDuration: number | null
    maxClipsPerVideo: number | null
    updatedAt: Date | null
    maintenanceMode: boolean | null
  }

  export type GlobalSettingsCountAggregateOutputType = {
    id: number
    minClipDuration: number
    maxClipDuration: number
    maxClipsPerVideo: number
    updatedAt: number
    maintenanceMode: number
    _all: number
  }


  export type GlobalSettingsAvgAggregateInputType = {
    minClipDuration?: true
    maxClipDuration?: true
    maxClipsPerVideo?: true
  }

  export type GlobalSettingsSumAggregateInputType = {
    minClipDuration?: true
    maxClipDuration?: true
    maxClipsPerVideo?: true
  }

  export type GlobalSettingsMinAggregateInputType = {
    id?: true
    minClipDuration?: true
    maxClipDuration?: true
    maxClipsPerVideo?: true
    updatedAt?: true
    maintenanceMode?: true
  }

  export type GlobalSettingsMaxAggregateInputType = {
    id?: true
    minClipDuration?: true
    maxClipDuration?: true
    maxClipsPerVideo?: true
    updatedAt?: true
    maintenanceMode?: true
  }

  export type GlobalSettingsCountAggregateInputType = {
    id?: true
    minClipDuration?: true
    maxClipDuration?: true
    maxClipsPerVideo?: true
    updatedAt?: true
    maintenanceMode?: true
    _all?: true
  }

  export type GlobalSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to aggregate.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalSettings
    **/
    _count?: true | GlobalSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalSettingsMaxAggregateInputType
  }

  export type GetGlobalSettingsAggregateType<T extends GlobalSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalSettings[P]>
      : GetScalarType<T[P], AggregateGlobalSettings[P]>
  }




  export type GlobalSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalSettingsWhereInput
    orderBy?: GlobalSettingsOrderByWithAggregationInput | GlobalSettingsOrderByWithAggregationInput[]
    by: GlobalSettingsScalarFieldEnum[] | GlobalSettingsScalarFieldEnum
    having?: GlobalSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalSettingsCountAggregateInputType | true
    _avg?: GlobalSettingsAvgAggregateInputType
    _sum?: GlobalSettingsSumAggregateInputType
    _min?: GlobalSettingsMinAggregateInputType
    _max?: GlobalSettingsMaxAggregateInputType
  }

  export type GlobalSettingsGroupByOutputType = {
    id: string
    minClipDuration: number
    maxClipDuration: number
    maxClipsPerVideo: number
    updatedAt: Date
    maintenanceMode: boolean
    _count: GlobalSettingsCountAggregateOutputType | null
    _avg: GlobalSettingsAvgAggregateOutputType | null
    _sum: GlobalSettingsSumAggregateOutputType | null
    _min: GlobalSettingsMinAggregateOutputType | null
    _max: GlobalSettingsMaxAggregateOutputType | null
  }

  type GetGlobalSettingsGroupByPayload<T extends GlobalSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalSettingsGroupByOutputType[P]>
        }
      >
    >


  export type GlobalSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minClipDuration?: boolean
    maxClipDuration?: boolean
    maxClipsPerVideo?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minClipDuration?: boolean
    maxClipDuration?: boolean
    maxClipsPerVideo?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minClipDuration?: boolean
    maxClipDuration?: boolean
    maxClipsPerVideo?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectScalar = {
    id?: boolean
    minClipDuration?: boolean
    maxClipDuration?: boolean
    maxClipsPerVideo?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }

  export type GlobalSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "minClipDuration" | "maxClipDuration" | "maxClipsPerVideo" | "updatedAt" | "maintenanceMode", ExtArgs["result"]["globalSettings"]>

  export type $GlobalSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      minClipDuration: number
      maxClipDuration: number
      maxClipsPerVideo: number
      updatedAt: Date
      maintenanceMode: boolean
    }, ExtArgs["result"]["globalSettings"]>
    composites: {}
  }

  type GlobalSettingsGetPayload<S extends boolean | null | undefined | GlobalSettingsDefaultArgs> = $Result.GetResult<Prisma.$GlobalSettingsPayload, S>

  type GlobalSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalSettingsCountAggregateInputType | true
    }

  export interface GlobalSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalSettings'], meta: { name: 'GlobalSettings' } }
    /**
     * Find zero or one GlobalSettings that matches the filter.
     * @param {GlobalSettingsFindUniqueArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalSettingsFindUniqueArgs>(args: SelectSubset<T, GlobalSettingsFindUniqueArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalSettingsFindUniqueOrThrowArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindFirstArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalSettingsFindFirstArgs>(args?: SelectSubset<T, GlobalSettingsFindFirstArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindFirstOrThrowArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalSettings
     * const globalSettings = await prisma.globalSettings.findMany()
     * 
     * // Get first 10 GlobalSettings
     * const globalSettings = await prisma.globalSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalSettingsFindManyArgs>(args?: SelectSubset<T, GlobalSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalSettings.
     * @param {GlobalSettingsCreateArgs} args - Arguments to create a GlobalSettings.
     * @example
     * // Create one GlobalSettings
     * const GlobalSettings = await prisma.globalSettings.create({
     *   data: {
     *     // ... data to create a GlobalSettings
     *   }
     * })
     * 
     */
    create<T extends GlobalSettingsCreateArgs>(args: SelectSubset<T, GlobalSettingsCreateArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalSettings.
     * @param {GlobalSettingsCreateManyArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSettings = await prisma.globalSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalSettingsCreateManyArgs>(args?: SelectSubset<T, GlobalSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalSettings and returns the data saved in the database.
     * @param {GlobalSettingsCreateManyAndReturnArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSettings = await prisma.globalSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalSettings and only return the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalSettings.
     * @param {GlobalSettingsDeleteArgs} args - Arguments to delete one GlobalSettings.
     * @example
     * // Delete one GlobalSettings
     * const GlobalSettings = await prisma.globalSettings.delete({
     *   where: {
     *     // ... filter to delete one GlobalSettings
     *   }
     * })
     * 
     */
    delete<T extends GlobalSettingsDeleteArgs>(args: SelectSubset<T, GlobalSettingsDeleteArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalSettings.
     * @param {GlobalSettingsUpdateArgs} args - Arguments to update one GlobalSettings.
     * @example
     * // Update one GlobalSettings
     * const globalSettings = await prisma.globalSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalSettingsUpdateArgs>(args: SelectSubset<T, GlobalSettingsUpdateArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalSettings.
     * @param {GlobalSettingsDeleteManyArgs} args - Arguments to filter GlobalSettings to delete.
     * @example
     * // Delete a few GlobalSettings
     * const { count } = await prisma.globalSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalSettingsDeleteManyArgs>(args?: SelectSubset<T, GlobalSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalSettings
     * const globalSettings = await prisma.globalSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalSettingsUpdateManyArgs>(args: SelectSubset<T, GlobalSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSettings and returns the data updated in the database.
     * @param {GlobalSettingsUpdateManyAndReturnArgs} args - Arguments to update many GlobalSettings.
     * @example
     * // Update many GlobalSettings
     * const globalSettings = await prisma.globalSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalSettings and only return the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalSettings.
     * @param {GlobalSettingsUpsertArgs} args - Arguments to update or create a GlobalSettings.
     * @example
     * // Update or create a GlobalSettings
     * const globalSettings = await prisma.globalSettings.upsert({
     *   create: {
     *     // ... data to create a GlobalSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalSettings we want to update
     *   }
     * })
     */
    upsert<T extends GlobalSettingsUpsertArgs>(args: SelectSubset<T, GlobalSettingsUpsertArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsCountArgs} args - Arguments to filter GlobalSettings to count.
     * @example
     * // Count the number of GlobalSettings
     * const count = await prisma.globalSettings.count({
     *   where: {
     *     // ... the filter for the GlobalSettings we want to count
     *   }
     * })
    **/
    count<T extends GlobalSettingsCountArgs>(
      args?: Subset<T, GlobalSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalSettingsAggregateArgs>(args: Subset<T, GlobalSettingsAggregateArgs>): Prisma.PrismaPromise<GetGlobalSettingsAggregateType<T>>

    /**
     * Group by GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsGroupByArgs} args - Group by arguments.
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
      T extends GlobalSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalSettingsGroupByArgs['orderBy'] }
        : { orderBy?: GlobalSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalSettings model
   */
  readonly fields: GlobalSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GlobalSettings model
   */
  interface GlobalSettingsFieldRefs {
    readonly id: FieldRef<"GlobalSettings", 'String'>
    readonly minClipDuration: FieldRef<"GlobalSettings", 'Float'>
    readonly maxClipDuration: FieldRef<"GlobalSettings", 'Float'>
    readonly maxClipsPerVideo: FieldRef<"GlobalSettings", 'Int'>
    readonly updatedAt: FieldRef<"GlobalSettings", 'DateTime'>
    readonly maintenanceMode: FieldRef<"GlobalSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GlobalSettings findUnique
   */
  export type GlobalSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings findUniqueOrThrow
   */
  export type GlobalSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings findFirst
   */
  export type GlobalSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings findFirstOrThrow
   */
  export type GlobalSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings findMany
   */
  export type GlobalSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings create
   */
  export type GlobalSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalSettings.
     */
    data: XOR<GlobalSettingsCreateInput, GlobalSettingsUncheckedCreateInput>
  }

  /**
   * GlobalSettings createMany
   */
  export type GlobalSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingsCreateManyInput | GlobalSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSettings createManyAndReturn
   */
  export type GlobalSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingsCreateManyInput | GlobalSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSettings update
   */
  export type GlobalSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateInput, GlobalSettingsUncheckedUpdateInput>
    /**
     * Choose, which GlobalSettings to update.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings updateMany
   */
  export type GlobalSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateManyMutationInput, GlobalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSettings to update
     */
    where?: GlobalSettingsWhereInput
    /**
     * Limit how many GlobalSettings to update.
     */
    limit?: number
  }

  /**
   * GlobalSettings updateManyAndReturn
   */
  export type GlobalSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data used to update GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateManyMutationInput, GlobalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSettings to update
     */
    where?: GlobalSettingsWhereInput
    /**
     * Limit how many GlobalSettings to update.
     */
    limit?: number
  }

  /**
   * GlobalSettings upsert
   */
  export type GlobalSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalSettings to update in case it exists.
     */
    where: GlobalSettingsWhereUniqueInput
    /**
     * In case the GlobalSettings found by the `where` argument doesn't exist, create a new GlobalSettings with this data.
     */
    create: XOR<GlobalSettingsCreateInput, GlobalSettingsUncheckedCreateInput>
    /**
     * In case the GlobalSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalSettingsUpdateInput, GlobalSettingsUncheckedUpdateInput>
  }

  /**
   * GlobalSettings delete
   */
  export type GlobalSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter which GlobalSettings to delete.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings deleteMany
   */
  export type GlobalSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to delete
     */
    where?: GlobalSettingsWhereInput
    /**
     * Limit how many GlobalSettings to delete.
     */
    limit?: number
  }

  /**
   * GlobalSettings without action
   */
  export type GlobalSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
  }


  /**
   * Model VideoClipCount
   */

  export type AggregateVideoClipCount = {
    _count: VideoClipCountCountAggregateOutputType | null
    _avg: VideoClipCountAvgAggregateOutputType | null
    _sum: VideoClipCountSumAggregateOutputType | null
    _min: VideoClipCountMinAggregateOutputType | null
    _max: VideoClipCountMaxAggregateOutputType | null
  }

  export type VideoClipCountAvgAggregateOutputType = {
    count: number | null
  }

  export type VideoClipCountSumAggregateOutputType = {
    count: number | null
  }

  export type VideoClipCountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    count: number | null
    updatedAt: Date | null
  }

  export type VideoClipCountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    count: number | null
    updatedAt: Date | null
  }

  export type VideoClipCountCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    count: number
    updatedAt: number
    _all: number
  }


  export type VideoClipCountAvgAggregateInputType = {
    count?: true
  }

  export type VideoClipCountSumAggregateInputType = {
    count?: true
  }

  export type VideoClipCountMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    count?: true
    updatedAt?: true
  }

  export type VideoClipCountMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    count?: true
    updatedAt?: true
  }

  export type VideoClipCountCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    count?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoClipCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoClipCount to aggregate.
     */
    where?: VideoClipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClipCounts to fetch.
     */
    orderBy?: VideoClipCountOrderByWithRelationInput | VideoClipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoClipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClipCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoClipCounts
    **/
    _count?: true | VideoClipCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoClipCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoClipCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoClipCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoClipCountMaxAggregateInputType
  }

  export type GetVideoClipCountAggregateType<T extends VideoClipCountAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoClipCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoClipCount[P]>
      : GetScalarType<T[P], AggregateVideoClipCount[P]>
  }




  export type VideoClipCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoClipCountWhereInput
    orderBy?: VideoClipCountOrderByWithAggregationInput | VideoClipCountOrderByWithAggregationInput[]
    by: VideoClipCountScalarFieldEnum[] | VideoClipCountScalarFieldEnum
    having?: VideoClipCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoClipCountCountAggregateInputType | true
    _avg?: VideoClipCountAvgAggregateInputType
    _sum?: VideoClipCountSumAggregateInputType
    _min?: VideoClipCountMinAggregateInputType
    _max?: VideoClipCountMaxAggregateInputType
  }

  export type VideoClipCountGroupByOutputType = {
    id: string
    userId: string
    videoId: string
    count: number
    updatedAt: Date
    _count: VideoClipCountCountAggregateOutputType | null
    _avg: VideoClipCountAvgAggregateOutputType | null
    _sum: VideoClipCountSumAggregateOutputType | null
    _min: VideoClipCountMinAggregateOutputType | null
    _max: VideoClipCountMaxAggregateOutputType | null
  }

  type GetVideoClipCountGroupByPayload<T extends VideoClipCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoClipCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoClipCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoClipCountGroupByOutputType[P]>
            : GetScalarType<T[P], VideoClipCountGroupByOutputType[P]>
        }
      >
    >


  export type VideoClipCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    count?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoClipCount"]>

  export type VideoClipCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    count?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoClipCount"]>

  export type VideoClipCountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    count?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoClipCount"]>

  export type VideoClipCountSelectScalar = {
    id?: boolean
    userId?: boolean
    videoId?: boolean
    count?: boolean
    updatedAt?: boolean
  }

  export type VideoClipCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "videoId" | "count" | "updatedAt", ExtArgs["result"]["videoClipCount"]>
  export type VideoClipCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type VideoClipCountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type VideoClipCountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $VideoClipCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoClipCount"
    objects: {
      user: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      videoId: string
      count: number
      updatedAt: Date
    }, ExtArgs["result"]["videoClipCount"]>
    composites: {}
  }

  type VideoClipCountGetPayload<S extends boolean | null | undefined | VideoClipCountDefaultArgs> = $Result.GetResult<Prisma.$VideoClipCountPayload, S>

  type VideoClipCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoClipCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoClipCountCountAggregateInputType | true
    }

  export interface VideoClipCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoClipCount'], meta: { name: 'VideoClipCount' } }
    /**
     * Find zero or one VideoClipCount that matches the filter.
     * @param {VideoClipCountFindUniqueArgs} args - Arguments to find a VideoClipCount
     * @example
     * // Get one VideoClipCount
     * const videoClipCount = await prisma.videoClipCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoClipCountFindUniqueArgs>(args: SelectSubset<T, VideoClipCountFindUniqueArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoClipCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoClipCountFindUniqueOrThrowArgs} args - Arguments to find a VideoClipCount
     * @example
     * // Get one VideoClipCount
     * const videoClipCount = await prisma.videoClipCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoClipCountFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoClipCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoClipCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountFindFirstArgs} args - Arguments to find a VideoClipCount
     * @example
     * // Get one VideoClipCount
     * const videoClipCount = await prisma.videoClipCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoClipCountFindFirstArgs>(args?: SelectSubset<T, VideoClipCountFindFirstArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoClipCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountFindFirstOrThrowArgs} args - Arguments to find a VideoClipCount
     * @example
     * // Get one VideoClipCount
     * const videoClipCount = await prisma.videoClipCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoClipCountFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoClipCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoClipCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoClipCounts
     * const videoClipCounts = await prisma.videoClipCount.findMany()
     * 
     * // Get first 10 VideoClipCounts
     * const videoClipCounts = await prisma.videoClipCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoClipCountWithIdOnly = await prisma.videoClipCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoClipCountFindManyArgs>(args?: SelectSubset<T, VideoClipCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoClipCount.
     * @param {VideoClipCountCreateArgs} args - Arguments to create a VideoClipCount.
     * @example
     * // Create one VideoClipCount
     * const VideoClipCount = await prisma.videoClipCount.create({
     *   data: {
     *     // ... data to create a VideoClipCount
     *   }
     * })
     * 
     */
    create<T extends VideoClipCountCreateArgs>(args: SelectSubset<T, VideoClipCountCreateArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoClipCounts.
     * @param {VideoClipCountCreateManyArgs} args - Arguments to create many VideoClipCounts.
     * @example
     * // Create many VideoClipCounts
     * const videoClipCount = await prisma.videoClipCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoClipCountCreateManyArgs>(args?: SelectSubset<T, VideoClipCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoClipCounts and returns the data saved in the database.
     * @param {VideoClipCountCreateManyAndReturnArgs} args - Arguments to create many VideoClipCounts.
     * @example
     * // Create many VideoClipCounts
     * const videoClipCount = await prisma.videoClipCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoClipCounts and only return the `id`
     * const videoClipCountWithIdOnly = await prisma.videoClipCount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoClipCountCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoClipCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoClipCount.
     * @param {VideoClipCountDeleteArgs} args - Arguments to delete one VideoClipCount.
     * @example
     * // Delete one VideoClipCount
     * const VideoClipCount = await prisma.videoClipCount.delete({
     *   where: {
     *     // ... filter to delete one VideoClipCount
     *   }
     * })
     * 
     */
    delete<T extends VideoClipCountDeleteArgs>(args: SelectSubset<T, VideoClipCountDeleteArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoClipCount.
     * @param {VideoClipCountUpdateArgs} args - Arguments to update one VideoClipCount.
     * @example
     * // Update one VideoClipCount
     * const videoClipCount = await prisma.videoClipCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoClipCountUpdateArgs>(args: SelectSubset<T, VideoClipCountUpdateArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoClipCounts.
     * @param {VideoClipCountDeleteManyArgs} args - Arguments to filter VideoClipCounts to delete.
     * @example
     * // Delete a few VideoClipCounts
     * const { count } = await prisma.videoClipCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoClipCountDeleteManyArgs>(args?: SelectSubset<T, VideoClipCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoClipCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoClipCounts
     * const videoClipCount = await prisma.videoClipCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoClipCountUpdateManyArgs>(args: SelectSubset<T, VideoClipCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoClipCounts and returns the data updated in the database.
     * @param {VideoClipCountUpdateManyAndReturnArgs} args - Arguments to update many VideoClipCounts.
     * @example
     * // Update many VideoClipCounts
     * const videoClipCount = await prisma.videoClipCount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoClipCounts and only return the `id`
     * const videoClipCountWithIdOnly = await prisma.videoClipCount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoClipCountUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoClipCountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoClipCount.
     * @param {VideoClipCountUpsertArgs} args - Arguments to update or create a VideoClipCount.
     * @example
     * // Update or create a VideoClipCount
     * const videoClipCount = await prisma.videoClipCount.upsert({
     *   create: {
     *     // ... data to create a VideoClipCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoClipCount we want to update
     *   }
     * })
     */
    upsert<T extends VideoClipCountUpsertArgs>(args: SelectSubset<T, VideoClipCountUpsertArgs<ExtArgs>>): Prisma__VideoClipCountClient<$Result.GetResult<Prisma.$VideoClipCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoClipCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountCountArgs} args - Arguments to filter VideoClipCounts to count.
     * @example
     * // Count the number of VideoClipCounts
     * const count = await prisma.videoClipCount.count({
     *   where: {
     *     // ... the filter for the VideoClipCounts we want to count
     *   }
     * })
    **/
    count<T extends VideoClipCountCountArgs>(
      args?: Subset<T, VideoClipCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoClipCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoClipCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoClipCountAggregateArgs>(args: Subset<T, VideoClipCountAggregateArgs>): Prisma.PrismaPromise<GetVideoClipCountAggregateType<T>>

    /**
     * Group by VideoClipCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountGroupByArgs} args - Group by arguments.
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
      T extends VideoClipCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoClipCountGroupByArgs['orderBy'] }
        : { orderBy?: VideoClipCountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoClipCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoClipCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoClipCount model
   */
  readonly fields: VideoClipCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoClipCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClipCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VideoClipCount model
   */
  interface VideoClipCountFieldRefs {
    readonly id: FieldRef<"VideoClipCount", 'String'>
    readonly userId: FieldRef<"VideoClipCount", 'String'>
    readonly videoId: FieldRef<"VideoClipCount", 'String'>
    readonly count: FieldRef<"VideoClipCount", 'Int'>
    readonly updatedAt: FieldRef<"VideoClipCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoClipCount findUnique
   */
  export type VideoClipCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * Filter, which VideoClipCount to fetch.
     */
    where: VideoClipCountWhereUniqueInput
  }

  /**
   * VideoClipCount findUniqueOrThrow
   */
  export type VideoClipCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * Filter, which VideoClipCount to fetch.
     */
    where: VideoClipCountWhereUniqueInput
  }

  /**
   * VideoClipCount findFirst
   */
  export type VideoClipCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * Filter, which VideoClipCount to fetch.
     */
    where?: VideoClipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClipCounts to fetch.
     */
    orderBy?: VideoClipCountOrderByWithRelationInput | VideoClipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoClipCounts.
     */
    cursor?: VideoClipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClipCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoClipCounts.
     */
    distinct?: VideoClipCountScalarFieldEnum | VideoClipCountScalarFieldEnum[]
  }

  /**
   * VideoClipCount findFirstOrThrow
   */
  export type VideoClipCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * Filter, which VideoClipCount to fetch.
     */
    where?: VideoClipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClipCounts to fetch.
     */
    orderBy?: VideoClipCountOrderByWithRelationInput | VideoClipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoClipCounts.
     */
    cursor?: VideoClipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClipCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoClipCounts.
     */
    distinct?: VideoClipCountScalarFieldEnum | VideoClipCountScalarFieldEnum[]
  }

  /**
   * VideoClipCount findMany
   */
  export type VideoClipCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * Filter, which VideoClipCounts to fetch.
     */
    where?: VideoClipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClipCounts to fetch.
     */
    orderBy?: VideoClipCountOrderByWithRelationInput | VideoClipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoClipCounts.
     */
    cursor?: VideoClipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClipCounts.
     */
    skip?: number
    distinct?: VideoClipCountScalarFieldEnum | VideoClipCountScalarFieldEnum[]
  }

  /**
   * VideoClipCount create
   */
  export type VideoClipCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoClipCount.
     */
    data: XOR<VideoClipCountCreateInput, VideoClipCountUncheckedCreateInput>
  }

  /**
   * VideoClipCount createMany
   */
  export type VideoClipCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoClipCounts.
     */
    data: VideoClipCountCreateManyInput | VideoClipCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoClipCount createManyAndReturn
   */
  export type VideoClipCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * The data used to create many VideoClipCounts.
     */
    data: VideoClipCountCreateManyInput | VideoClipCountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoClipCount update
   */
  export type VideoClipCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoClipCount.
     */
    data: XOR<VideoClipCountUpdateInput, VideoClipCountUncheckedUpdateInput>
    /**
     * Choose, which VideoClipCount to update.
     */
    where: VideoClipCountWhereUniqueInput
  }

  /**
   * VideoClipCount updateMany
   */
  export type VideoClipCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoClipCounts.
     */
    data: XOR<VideoClipCountUpdateManyMutationInput, VideoClipCountUncheckedUpdateManyInput>
    /**
     * Filter which VideoClipCounts to update
     */
    where?: VideoClipCountWhereInput
    /**
     * Limit how many VideoClipCounts to update.
     */
    limit?: number
  }

  /**
   * VideoClipCount updateManyAndReturn
   */
  export type VideoClipCountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * The data used to update VideoClipCounts.
     */
    data: XOR<VideoClipCountUpdateManyMutationInput, VideoClipCountUncheckedUpdateManyInput>
    /**
     * Filter which VideoClipCounts to update
     */
    where?: VideoClipCountWhereInput
    /**
     * Limit how many VideoClipCounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoClipCount upsert
   */
  export type VideoClipCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoClipCount to update in case it exists.
     */
    where: VideoClipCountWhereUniqueInput
    /**
     * In case the VideoClipCount found by the `where` argument doesn't exist, create a new VideoClipCount with this data.
     */
    create: XOR<VideoClipCountCreateInput, VideoClipCountUncheckedCreateInput>
    /**
     * In case the VideoClipCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoClipCountUpdateInput, VideoClipCountUncheckedUpdateInput>
  }

  /**
   * VideoClipCount delete
   */
  export type VideoClipCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
    /**
     * Filter which VideoClipCount to delete.
     */
    where: VideoClipCountWhereUniqueInput
  }

  /**
   * VideoClipCount deleteMany
   */
  export type VideoClipCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoClipCounts to delete
     */
    where?: VideoClipCountWhereInput
    /**
     * Limit how many VideoClipCounts to delete.
     */
    limit?: number
  }

  /**
   * VideoClipCount without action
   */
  export type VideoClipCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCount
     */
    select?: VideoClipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClipCount
     */
    omit?: VideoClipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipCountInclude<ExtArgs> | null
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


  export const AppUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    tiktokUsername: 'tiktokUsername',
    tiktokLink: 'tiktokLink',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const SavedMomentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    label: 'label',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavedMomentScalarFieldEnum = (typeof SavedMomentScalarFieldEnum)[keyof typeof SavedMomentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const GlobalSettingsScalarFieldEnum: {
    id: 'id',
    minClipDuration: 'minClipDuration',
    maxClipDuration: 'maxClipDuration',
    maxClipsPerVideo: 'maxClipsPerVideo',
    updatedAt: 'updatedAt',
    maintenanceMode: 'maintenanceMode'
  };

  export type GlobalSettingsScalarFieldEnum = (typeof GlobalSettingsScalarFieldEnum)[keyof typeof GlobalSettingsScalarFieldEnum]


  export const VideoClipCountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    count: 'count',
    updatedAt: 'updatedAt'
  };

  export type VideoClipCountScalarFieldEnum = (typeof VideoClipCountScalarFieldEnum)[keyof typeof VideoClipCountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    id?: StringFilter<"AppUser"> | string
    username?: StringFilter<"AppUser"> | string
    password?: StringFilter<"AppUser"> | string
    tiktokUsername?: StringNullableFilter<"AppUser"> | string | null
    tiktokLink?: StringFilter<"AppUser"> | string
    status?: EnumUserStatusFilter<"AppUser"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    videoClipCounts?: VideoClipCountListRelationFilter
    savedMoments?: SavedMomentListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    tiktokUsername?: SortOrderInput | SortOrder
    tiktokLink?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoClipCounts?: VideoClipCountOrderByRelationAggregateInput
    savedMoments?: SavedMomentOrderByRelationAggregateInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    password?: StringFilter<"AppUser"> | string
    tiktokUsername?: StringNullableFilter<"AppUser"> | string | null
    tiktokLink?: StringFilter<"AppUser"> | string
    status?: EnumUserStatusFilter<"AppUser"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    videoClipCounts?: VideoClipCountListRelationFilter
    savedMoments?: SavedMomentListRelationFilter
  }, "id" | "username">

  export type AppUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    tiktokUsername?: SortOrderInput | SortOrder
    tiktokLink?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppUser"> | string
    username?: StringWithAggregatesFilter<"AppUser"> | string
    password?: StringWithAggregatesFilter<"AppUser"> | string
    tiktokUsername?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    tiktokLink?: StringWithAggregatesFilter<"AppUser"> | string
    status?: EnumUserStatusWithAggregatesFilter<"AppUser"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
  }

  export type SavedMomentWhereInput = {
    AND?: SavedMomentWhereInput | SavedMomentWhereInput[]
    OR?: SavedMomentWhereInput[]
    NOT?: SavedMomentWhereInput | SavedMomentWhereInput[]
    id?: StringFilter<"SavedMoment"> | string
    userId?: StringFilter<"SavedMoment"> | string
    videoId?: StringFilter<"SavedMoment"> | string
    label?: StringFilter<"SavedMoment"> | string
    startTime?: FloatFilter<"SavedMoment"> | number
    endTime?: FloatFilter<"SavedMoment"> | number
    createdAt?: DateTimeFilter<"SavedMoment"> | Date | string
    updatedAt?: DateTimeFilter<"SavedMoment"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }

  export type SavedMomentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: AppUserOrderByWithRelationInput
  }

  export type SavedMomentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedMomentWhereInput | SavedMomentWhereInput[]
    OR?: SavedMomentWhereInput[]
    NOT?: SavedMomentWhereInput | SavedMomentWhereInput[]
    userId?: StringFilter<"SavedMoment"> | string
    videoId?: StringFilter<"SavedMoment"> | string
    label?: StringFilter<"SavedMoment"> | string
    startTime?: FloatFilter<"SavedMoment"> | number
    endTime?: FloatFilter<"SavedMoment"> | number
    createdAt?: DateTimeFilter<"SavedMoment"> | Date | string
    updatedAt?: DateTimeFilter<"SavedMoment"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }, "id">

  export type SavedMomentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavedMomentCountOrderByAggregateInput
    _avg?: SavedMomentAvgOrderByAggregateInput
    _max?: SavedMomentMaxOrderByAggregateInput
    _min?: SavedMomentMinOrderByAggregateInput
    _sum?: SavedMomentSumOrderByAggregateInput
  }

  export type SavedMomentScalarWhereWithAggregatesInput = {
    AND?: SavedMomentScalarWhereWithAggregatesInput | SavedMomentScalarWhereWithAggregatesInput[]
    OR?: SavedMomentScalarWhereWithAggregatesInput[]
    NOT?: SavedMomentScalarWhereWithAggregatesInput | SavedMomentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedMoment"> | string
    userId?: StringWithAggregatesFilter<"SavedMoment"> | string
    videoId?: StringWithAggregatesFilter<"SavedMoment"> | string
    label?: StringWithAggregatesFilter<"SavedMoment"> | string
    startTime?: FloatWithAggregatesFilter<"SavedMoment"> | number
    endTime?: FloatWithAggregatesFilter<"SavedMoment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SavedMoment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavedMoment"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type GlobalSettingsWhereInput = {
    AND?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    OR?: GlobalSettingsWhereInput[]
    NOT?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    id?: StringFilter<"GlobalSettings"> | string
    minClipDuration?: FloatFilter<"GlobalSettings"> | number
    maxClipDuration?: FloatFilter<"GlobalSettings"> | number
    maxClipsPerVideo?: IntFilter<"GlobalSettings"> | number
    updatedAt?: DateTimeFilter<"GlobalSettings"> | Date | string
    maintenanceMode?: BoolFilter<"GlobalSettings"> | boolean
  }

  export type GlobalSettingsOrderByWithRelationInput = {
    id?: SortOrder
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type GlobalSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    OR?: GlobalSettingsWhereInput[]
    NOT?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    minClipDuration?: FloatFilter<"GlobalSettings"> | number
    maxClipDuration?: FloatFilter<"GlobalSettings"> | number
    maxClipsPerVideo?: IntFilter<"GlobalSettings"> | number
    updatedAt?: DateTimeFilter<"GlobalSettings"> | Date | string
    maintenanceMode?: BoolFilter<"GlobalSettings"> | boolean
  }, "id">

  export type GlobalSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
    _count?: GlobalSettingsCountOrderByAggregateInput
    _avg?: GlobalSettingsAvgOrderByAggregateInput
    _max?: GlobalSettingsMaxOrderByAggregateInput
    _min?: GlobalSettingsMinOrderByAggregateInput
    _sum?: GlobalSettingsSumOrderByAggregateInput
  }

  export type GlobalSettingsScalarWhereWithAggregatesInput = {
    AND?: GlobalSettingsScalarWhereWithAggregatesInput | GlobalSettingsScalarWhereWithAggregatesInput[]
    OR?: GlobalSettingsScalarWhereWithAggregatesInput[]
    NOT?: GlobalSettingsScalarWhereWithAggregatesInput | GlobalSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalSettings"> | string
    minClipDuration?: FloatWithAggregatesFilter<"GlobalSettings"> | number
    maxClipDuration?: FloatWithAggregatesFilter<"GlobalSettings"> | number
    maxClipsPerVideo?: IntWithAggregatesFilter<"GlobalSettings"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalSettings"> | Date | string
    maintenanceMode?: BoolWithAggregatesFilter<"GlobalSettings"> | boolean
  }

  export type VideoClipCountWhereInput = {
    AND?: VideoClipCountWhereInput | VideoClipCountWhereInput[]
    OR?: VideoClipCountWhereInput[]
    NOT?: VideoClipCountWhereInput | VideoClipCountWhereInput[]
    id?: StringFilter<"VideoClipCount"> | string
    userId?: StringFilter<"VideoClipCount"> | string
    videoId?: StringFilter<"VideoClipCount"> | string
    count?: IntFilter<"VideoClipCount"> | number
    updatedAt?: DateTimeFilter<"VideoClipCount"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }

  export type VideoClipCountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
    user?: AppUserOrderByWithRelationInput
  }

  export type VideoClipCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_videoId?: VideoClipCountUserIdVideoIdCompoundUniqueInput
    AND?: VideoClipCountWhereInput | VideoClipCountWhereInput[]
    OR?: VideoClipCountWhereInput[]
    NOT?: VideoClipCountWhereInput | VideoClipCountWhereInput[]
    userId?: StringFilter<"VideoClipCount"> | string
    videoId?: StringFilter<"VideoClipCount"> | string
    count?: IntFilter<"VideoClipCount"> | number
    updatedAt?: DateTimeFilter<"VideoClipCount"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }, "id" | "userId_videoId">

  export type VideoClipCountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoClipCountCountOrderByAggregateInput
    _avg?: VideoClipCountAvgOrderByAggregateInput
    _max?: VideoClipCountMaxOrderByAggregateInput
    _min?: VideoClipCountMinOrderByAggregateInput
    _sum?: VideoClipCountSumOrderByAggregateInput
  }

  export type VideoClipCountScalarWhereWithAggregatesInput = {
    AND?: VideoClipCountScalarWhereWithAggregatesInput | VideoClipCountScalarWhereWithAggregatesInput[]
    OR?: VideoClipCountScalarWhereWithAggregatesInput[]
    NOT?: VideoClipCountScalarWhereWithAggregatesInput | VideoClipCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoClipCount"> | string
    userId?: StringWithAggregatesFilter<"VideoClipCount"> | string
    videoId?: StringWithAggregatesFilter<"VideoClipCount"> | string
    count?: IntWithAggregatesFilter<"VideoClipCount"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"VideoClipCount"> | Date | string
  }

  export type AppUserCreateInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoClipCounts?: VideoClipCountCreateNestedManyWithoutUserInput
    savedMoments?: SavedMomentCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoClipCounts?: VideoClipCountUncheckedCreateNestedManyWithoutUserInput
    savedMoments?: SavedMomentUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoClipCounts?: VideoClipCountUpdateManyWithoutUserNestedInput
    savedMoments?: SavedMomentUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoClipCounts?: VideoClipCountUncheckedUpdateManyWithoutUserNestedInput
    savedMoments?: SavedMomentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppUserCreateManyInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMomentCreateInput = {
    id?: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AppUserCreateNestedOneWithoutSavedMomentsInput
  }

  export type SavedMomentUncheckedCreateInput = {
    id?: string
    userId: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedMomentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutSavedMomentsNestedInput
  }

  export type SavedMomentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMomentCreateManyInput = {
    id?: string
    userId: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedMomentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMomentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalSettingsCreateInput = {
    id?: string
    minClipDuration?: number
    maxClipDuration?: number
    maxClipsPerVideo?: number
    updatedAt?: Date | string
    maintenanceMode?: boolean
  }

  export type GlobalSettingsUncheckedCreateInput = {
    id?: string
    minClipDuration?: number
    maxClipDuration?: number
    maxClipsPerVideo?: number
    updatedAt?: Date | string
    maintenanceMode?: boolean
  }

  export type GlobalSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipsPerVideo?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipsPerVideo?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalSettingsCreateManyInput = {
    id?: string
    minClipDuration?: number
    maxClipDuration?: number
    maxClipsPerVideo?: number
    updatedAt?: Date | string
    maintenanceMode?: boolean
  }

  export type GlobalSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipsPerVideo?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    minClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipDuration?: FloatFieldUpdateOperationsInput | number
    maxClipsPerVideo?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoClipCountCreateInput = {
    id?: string
    videoId: string
    count?: number
    updatedAt?: Date | string
    user: AppUserCreateNestedOneWithoutVideoClipCountsInput
  }

  export type VideoClipCountUncheckedCreateInput = {
    id?: string
    userId: string
    videoId: string
    count?: number
    updatedAt?: Date | string
  }

  export type VideoClipCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutVideoClipCountsNestedInput
  }

  export type VideoClipCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipCountCreateManyInput = {
    id?: string
    userId: string
    videoId: string
    count?: number
    updatedAt?: Date | string
  }

  export type VideoClipCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VideoClipCountListRelationFilter = {
    every?: VideoClipCountWhereInput
    some?: VideoClipCountWhereInput
    none?: VideoClipCountWhereInput
  }

  export type SavedMomentListRelationFilter = {
    every?: SavedMomentWhereInput
    some?: SavedMomentWhereInput
    none?: SavedMomentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoClipCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedMomentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    tiktokUsername?: SortOrder
    tiktokLink?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    tiktokUsername?: SortOrder
    tiktokLink?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    tiktokUsername?: SortOrder
    tiktokLink?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AppUserScalarRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type SavedMomentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedMomentAvgOrderByAggregateInput = {
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SavedMomentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedMomentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedMomentSumOrderByAggregateInput = {
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GlobalSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type GlobalSettingsAvgOrderByAggregateInput = {
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
  }

  export type GlobalSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type GlobalSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type GlobalSettingsSumOrderByAggregateInput = {
    minClipDuration?: SortOrder
    maxClipDuration?: SortOrder
    maxClipsPerVideo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VideoClipCountUserIdVideoIdCompoundUniqueInput = {
    userId: string
    videoId: string
  }

  export type VideoClipCountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoClipCountAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type VideoClipCountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoClipCountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoClipCountSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type VideoClipCountCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoClipCountCreateWithoutUserInput, VideoClipCountUncheckedCreateWithoutUserInput> | VideoClipCountCreateWithoutUserInput[] | VideoClipCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCountCreateOrConnectWithoutUserInput | VideoClipCountCreateOrConnectWithoutUserInput[]
    createMany?: VideoClipCountCreateManyUserInputEnvelope
    connect?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
  }

  export type SavedMomentCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedMomentCreateWithoutUserInput, SavedMomentUncheckedCreateWithoutUserInput> | SavedMomentCreateWithoutUserInput[] | SavedMomentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMomentCreateOrConnectWithoutUserInput | SavedMomentCreateOrConnectWithoutUserInput[]
    createMany?: SavedMomentCreateManyUserInputEnvelope
    connect?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
  }

  export type VideoClipCountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoClipCountCreateWithoutUserInput, VideoClipCountUncheckedCreateWithoutUserInput> | VideoClipCountCreateWithoutUserInput[] | VideoClipCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCountCreateOrConnectWithoutUserInput | VideoClipCountCreateOrConnectWithoutUserInput[]
    createMany?: VideoClipCountCreateManyUserInputEnvelope
    connect?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
  }

  export type SavedMomentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedMomentCreateWithoutUserInput, SavedMomentUncheckedCreateWithoutUserInput> | SavedMomentCreateWithoutUserInput[] | SavedMomentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMomentCreateOrConnectWithoutUserInput | SavedMomentCreateOrConnectWithoutUserInput[]
    createMany?: SavedMomentCreateManyUserInputEnvelope
    connect?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VideoClipCountUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoClipCountCreateWithoutUserInput, VideoClipCountUncheckedCreateWithoutUserInput> | VideoClipCountCreateWithoutUserInput[] | VideoClipCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCountCreateOrConnectWithoutUserInput | VideoClipCountCreateOrConnectWithoutUserInput[]
    upsert?: VideoClipCountUpsertWithWhereUniqueWithoutUserInput | VideoClipCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoClipCountCreateManyUserInputEnvelope
    set?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    disconnect?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    delete?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    connect?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    update?: VideoClipCountUpdateWithWhereUniqueWithoutUserInput | VideoClipCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoClipCountUpdateManyWithWhereWithoutUserInput | VideoClipCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoClipCountScalarWhereInput | VideoClipCountScalarWhereInput[]
  }

  export type SavedMomentUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedMomentCreateWithoutUserInput, SavedMomentUncheckedCreateWithoutUserInput> | SavedMomentCreateWithoutUserInput[] | SavedMomentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMomentCreateOrConnectWithoutUserInput | SavedMomentCreateOrConnectWithoutUserInput[]
    upsert?: SavedMomentUpsertWithWhereUniqueWithoutUserInput | SavedMomentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedMomentCreateManyUserInputEnvelope
    set?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    disconnect?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    delete?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    connect?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    update?: SavedMomentUpdateWithWhereUniqueWithoutUserInput | SavedMomentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedMomentUpdateManyWithWhereWithoutUserInput | SavedMomentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedMomentScalarWhereInput | SavedMomentScalarWhereInput[]
  }

  export type VideoClipCountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoClipCountCreateWithoutUserInput, VideoClipCountUncheckedCreateWithoutUserInput> | VideoClipCountCreateWithoutUserInput[] | VideoClipCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCountCreateOrConnectWithoutUserInput | VideoClipCountCreateOrConnectWithoutUserInput[]
    upsert?: VideoClipCountUpsertWithWhereUniqueWithoutUserInput | VideoClipCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoClipCountCreateManyUserInputEnvelope
    set?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    disconnect?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    delete?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    connect?: VideoClipCountWhereUniqueInput | VideoClipCountWhereUniqueInput[]
    update?: VideoClipCountUpdateWithWhereUniqueWithoutUserInput | VideoClipCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoClipCountUpdateManyWithWhereWithoutUserInput | VideoClipCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoClipCountScalarWhereInput | VideoClipCountScalarWhereInput[]
  }

  export type SavedMomentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedMomentCreateWithoutUserInput, SavedMomentUncheckedCreateWithoutUserInput> | SavedMomentCreateWithoutUserInput[] | SavedMomentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMomentCreateOrConnectWithoutUserInput | SavedMomentCreateOrConnectWithoutUserInput[]
    upsert?: SavedMomentUpsertWithWhereUniqueWithoutUserInput | SavedMomentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedMomentCreateManyUserInputEnvelope
    set?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    disconnect?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    delete?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    connect?: SavedMomentWhereUniqueInput | SavedMomentWhereUniqueInput[]
    update?: SavedMomentUpdateWithWhereUniqueWithoutUserInput | SavedMomentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedMomentUpdateManyWithWhereWithoutUserInput | SavedMomentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedMomentScalarWhereInput | SavedMomentScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutSavedMomentsInput = {
    create?: XOR<AppUserCreateWithoutSavedMomentsInput, AppUserUncheckedCreateWithoutSavedMomentsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutSavedMomentsInput
    connect?: AppUserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppUserUpdateOneRequiredWithoutSavedMomentsNestedInput = {
    create?: XOR<AppUserCreateWithoutSavedMomentsInput, AppUserUncheckedCreateWithoutSavedMomentsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutSavedMomentsInput
    upsert?: AppUserUpsertWithoutSavedMomentsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutSavedMomentsInput, AppUserUpdateWithoutSavedMomentsInput>, AppUserUncheckedUpdateWithoutSavedMomentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AppUserCreateNestedOneWithoutVideoClipCountsInput = {
    create?: XOR<AppUserCreateWithoutVideoClipCountsInput, AppUserUncheckedCreateWithoutVideoClipCountsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutVideoClipCountsInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppUserUpdateOneRequiredWithoutVideoClipCountsNestedInput = {
    create?: XOR<AppUserCreateWithoutVideoClipCountsInput, AppUserUncheckedCreateWithoutVideoClipCountsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutVideoClipCountsInput
    upsert?: AppUserUpsertWithoutVideoClipCountsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutVideoClipCountsInput, AppUserUpdateWithoutVideoClipCountsInput>, AppUserUncheckedUpdateWithoutVideoClipCountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VideoClipCountCreateWithoutUserInput = {
    id?: string
    videoId: string
    count?: number
    updatedAt?: Date | string
  }

  export type VideoClipCountUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    count?: number
    updatedAt?: Date | string
  }

  export type VideoClipCountCreateOrConnectWithoutUserInput = {
    where: VideoClipCountWhereUniqueInput
    create: XOR<VideoClipCountCreateWithoutUserInput, VideoClipCountUncheckedCreateWithoutUserInput>
  }

  export type VideoClipCountCreateManyUserInputEnvelope = {
    data: VideoClipCountCreateManyUserInput | VideoClipCountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedMomentCreateWithoutUserInput = {
    id?: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedMomentUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedMomentCreateOrConnectWithoutUserInput = {
    where: SavedMomentWhereUniqueInput
    create: XOR<SavedMomentCreateWithoutUserInput, SavedMomentUncheckedCreateWithoutUserInput>
  }

  export type SavedMomentCreateManyUserInputEnvelope = {
    data: SavedMomentCreateManyUserInput | SavedMomentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoClipCountUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoClipCountWhereUniqueInput
    update: XOR<VideoClipCountUpdateWithoutUserInput, VideoClipCountUncheckedUpdateWithoutUserInput>
    create: XOR<VideoClipCountCreateWithoutUserInput, VideoClipCountUncheckedCreateWithoutUserInput>
  }

  export type VideoClipCountUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoClipCountWhereUniqueInput
    data: XOR<VideoClipCountUpdateWithoutUserInput, VideoClipCountUncheckedUpdateWithoutUserInput>
  }

  export type VideoClipCountUpdateManyWithWhereWithoutUserInput = {
    where: VideoClipCountScalarWhereInput
    data: XOR<VideoClipCountUpdateManyMutationInput, VideoClipCountUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoClipCountScalarWhereInput = {
    AND?: VideoClipCountScalarWhereInput | VideoClipCountScalarWhereInput[]
    OR?: VideoClipCountScalarWhereInput[]
    NOT?: VideoClipCountScalarWhereInput | VideoClipCountScalarWhereInput[]
    id?: StringFilter<"VideoClipCount"> | string
    userId?: StringFilter<"VideoClipCount"> | string
    videoId?: StringFilter<"VideoClipCount"> | string
    count?: IntFilter<"VideoClipCount"> | number
    updatedAt?: DateTimeFilter<"VideoClipCount"> | Date | string
  }

  export type SavedMomentUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedMomentWhereUniqueInput
    update: XOR<SavedMomentUpdateWithoutUserInput, SavedMomentUncheckedUpdateWithoutUserInput>
    create: XOR<SavedMomentCreateWithoutUserInput, SavedMomentUncheckedCreateWithoutUserInput>
  }

  export type SavedMomentUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedMomentWhereUniqueInput
    data: XOR<SavedMomentUpdateWithoutUserInput, SavedMomentUncheckedUpdateWithoutUserInput>
  }

  export type SavedMomentUpdateManyWithWhereWithoutUserInput = {
    where: SavedMomentScalarWhereInput
    data: XOR<SavedMomentUpdateManyMutationInput, SavedMomentUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedMomentScalarWhereInput = {
    AND?: SavedMomentScalarWhereInput | SavedMomentScalarWhereInput[]
    OR?: SavedMomentScalarWhereInput[]
    NOT?: SavedMomentScalarWhereInput | SavedMomentScalarWhereInput[]
    id?: StringFilter<"SavedMoment"> | string
    userId?: StringFilter<"SavedMoment"> | string
    videoId?: StringFilter<"SavedMoment"> | string
    label?: StringFilter<"SavedMoment"> | string
    startTime?: FloatFilter<"SavedMoment"> | number
    endTime?: FloatFilter<"SavedMoment"> | number
    createdAt?: DateTimeFilter<"SavedMoment"> | Date | string
    updatedAt?: DateTimeFilter<"SavedMoment"> | Date | string
  }

  export type AppUserCreateWithoutSavedMomentsInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoClipCounts?: VideoClipCountCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutSavedMomentsInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoClipCounts?: VideoClipCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutSavedMomentsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutSavedMomentsInput, AppUserUncheckedCreateWithoutSavedMomentsInput>
  }

  export type AppUserUpsertWithoutSavedMomentsInput = {
    update: XOR<AppUserUpdateWithoutSavedMomentsInput, AppUserUncheckedUpdateWithoutSavedMomentsInput>
    create: XOR<AppUserCreateWithoutSavedMomentsInput, AppUserUncheckedCreateWithoutSavedMomentsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutSavedMomentsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutSavedMomentsInput, AppUserUncheckedUpdateWithoutSavedMomentsInput>
  }

  export type AppUserUpdateWithoutSavedMomentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoClipCounts?: VideoClipCountUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutSavedMomentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoClipCounts?: VideoClipCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppUserCreateWithoutVideoClipCountsInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    savedMoments?: SavedMomentCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutVideoClipCountsInput = {
    id?: string
    username: string
    password: string
    tiktokUsername?: string | null
    tiktokLink: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    savedMoments?: SavedMomentUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutVideoClipCountsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutVideoClipCountsInput, AppUserUncheckedCreateWithoutVideoClipCountsInput>
  }

  export type AppUserUpsertWithoutVideoClipCountsInput = {
    update: XOR<AppUserUpdateWithoutVideoClipCountsInput, AppUserUncheckedUpdateWithoutVideoClipCountsInput>
    create: XOR<AppUserCreateWithoutVideoClipCountsInput, AppUserUncheckedCreateWithoutVideoClipCountsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutVideoClipCountsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutVideoClipCountsInput, AppUserUncheckedUpdateWithoutVideoClipCountsInput>
  }

  export type AppUserUpdateWithoutVideoClipCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedMoments?: SavedMomentUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutVideoClipCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tiktokUsername?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedMoments?: SavedMomentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoClipCountCreateManyUserInput = {
    id?: string
    videoId: string
    count?: number
    updatedAt?: Date | string
  }

  export type SavedMomentCreateManyUserInput = {
    id?: string
    videoId: string
    label: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoClipCountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipCountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipCountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMomentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMomentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMomentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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