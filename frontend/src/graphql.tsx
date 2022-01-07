import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "jobcareer" */
export type Jobcareer = {
  __typename?: 'jobcareer';
  id: Scalars['Int'];
  jobDescription?: Maybe<Scalars['String']>;
  jobName: Scalars['String'];
  jobStatus: Scalars['Boolean'];
};

/** aggregated selection of "jobcareer" */
export type Jobcareer_Aggregate = {
  __typename?: 'jobcareer_aggregate';
  aggregate?: Maybe<Jobcareer_Aggregate_Fields>;
  nodes: Array<Jobcareer>;
};

/** aggregate fields of "jobcareer" */
export type Jobcareer_Aggregate_Fields = {
  __typename?: 'jobcareer_aggregate_fields';
  avg?: Maybe<Jobcareer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jobcareer_Max_Fields>;
  min?: Maybe<Jobcareer_Min_Fields>;
  stddev?: Maybe<Jobcareer_Stddev_Fields>;
  stddev_pop?: Maybe<Jobcareer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jobcareer_Stddev_Samp_Fields>;
  sum?: Maybe<Jobcareer_Sum_Fields>;
  var_pop?: Maybe<Jobcareer_Var_Pop_Fields>;
  var_samp?: Maybe<Jobcareer_Var_Samp_Fields>;
  variance?: Maybe<Jobcareer_Variance_Fields>;
};


/** aggregate fields of "jobcareer" */
export type Jobcareer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobcareer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jobcareer_Avg_Fields = {
  __typename?: 'jobcareer_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "jobcareer". All fields are combined with a logical 'AND'. */
export type Jobcareer_Bool_Exp = {
  _and?: InputMaybe<Array<Jobcareer_Bool_Exp>>;
  _not?: InputMaybe<Jobcareer_Bool_Exp>;
  _or?: InputMaybe<Array<Jobcareer_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  jobDescription?: InputMaybe<String_Comparison_Exp>;
  jobName?: InputMaybe<String_Comparison_Exp>;
  jobStatus?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobcareer" */
export enum Jobcareer_Constraint {
  /** unique or primary key constraint */
  JobcareerPkey = 'jobcareer_pkey'
}

/** input type for incrementing numeric columns in table "jobcareer" */
export type Jobcareer_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "jobcareer" */
export type Jobcareer_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  jobDescription?: InputMaybe<Scalars['String']>;
  jobName?: InputMaybe<Scalars['String']>;
  jobStatus?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Jobcareer_Max_Fields = {
  __typename?: 'jobcareer_max_fields';
  id?: Maybe<Scalars['Int']>;
  jobDescription?: Maybe<Scalars['String']>;
  jobName?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Jobcareer_Min_Fields = {
  __typename?: 'jobcareer_min_fields';
  id?: Maybe<Scalars['Int']>;
  jobDescription?: Maybe<Scalars['String']>;
  jobName?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "jobcareer" */
export type Jobcareer_Mutation_Response = {
  __typename?: 'jobcareer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobcareer>;
};

/** on conflict condition type for table "jobcareer" */
export type Jobcareer_On_Conflict = {
  constraint: Jobcareer_Constraint;
  update_columns?: Array<Jobcareer_Update_Column>;
  where?: InputMaybe<Jobcareer_Bool_Exp>;
};

/** Ordering options when selecting data from "jobcareer". */
export type Jobcareer_Order_By = {
  id?: InputMaybe<Order_By>;
  jobDescription?: InputMaybe<Order_By>;
  jobName?: InputMaybe<Order_By>;
  jobStatus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobcareer */
export type Jobcareer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "jobcareer" */
export enum Jobcareer_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  JobDescription = 'jobDescription',
  /** column name */
  JobName = 'jobName',
  /** column name */
  JobStatus = 'jobStatus'
}

/** input type for updating data in table "jobcareer" */
export type Jobcareer_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  jobDescription?: InputMaybe<Scalars['String']>;
  jobName?: InputMaybe<Scalars['String']>;
  jobStatus?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Jobcareer_Stddev_Fields = {
  __typename?: 'jobcareer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jobcareer_Stddev_Pop_Fields = {
  __typename?: 'jobcareer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jobcareer_Stddev_Samp_Fields = {
  __typename?: 'jobcareer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Jobcareer_Sum_Fields = {
  __typename?: 'jobcareer_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "jobcareer" */
export enum Jobcareer_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  JobDescription = 'jobDescription',
  /** column name */
  JobName = 'jobName',
  /** column name */
  JobStatus = 'jobStatus'
}

/** aggregate var_pop on columns */
export type Jobcareer_Var_Pop_Fields = {
  __typename?: 'jobcareer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jobcareer_Var_Samp_Fields = {
  __typename?: 'jobcareer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jobcareer_Variance_Fields = {
  __typename?: 'jobcareer_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "jobcareer" */
  delete_jobcareer?: Maybe<Jobcareer_Mutation_Response>;
  /** delete single row from the table: "jobcareer" */
  delete_jobcareer_by_pk?: Maybe<Jobcareer>;
  /** insert data into the table: "jobcareer" */
  insert_jobcareer?: Maybe<Jobcareer_Mutation_Response>;
  /** insert a single row into the table: "jobcareer" */
  insert_jobcareer_one?: Maybe<Jobcareer>;
  /** update data of the table: "jobcareer" */
  update_jobcareer?: Maybe<Jobcareer_Mutation_Response>;
  /** update single row of the table: "jobcareer" */
  update_jobcareer_by_pk?: Maybe<Jobcareer>;
};


/** mutation root */
export type Mutation_RootDelete_JobcareerArgs = {
  where: Jobcareer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobcareer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_JobcareerArgs = {
  objects: Array<Jobcareer_Insert_Input>;
  on_conflict?: InputMaybe<Jobcareer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobcareer_OneArgs = {
  object: Jobcareer_Insert_Input;
  on_conflict?: InputMaybe<Jobcareer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_JobcareerArgs = {
  _inc?: InputMaybe<Jobcareer_Inc_Input>;
  _set?: InputMaybe<Jobcareer_Set_Input>;
  where: Jobcareer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobcareer_By_PkArgs = {
  _inc?: InputMaybe<Jobcareer_Inc_Input>;
  _set?: InputMaybe<Jobcareer_Set_Input>;
  pk_columns: Jobcareer_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "jobcareer" */
  jobcareer: Array<Jobcareer>;
  /** fetch aggregated fields from the table: "jobcareer" */
  jobcareer_aggregate: Jobcareer_Aggregate;
  /** fetch data from the table: "jobcareer" using primary key columns */
  jobcareer_by_pk?: Maybe<Jobcareer>;
};


export type Query_RootJobcareerArgs = {
  distinct_on?: InputMaybe<Array<Jobcareer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobcareer_Order_By>>;
  where?: InputMaybe<Jobcareer_Bool_Exp>;
};


export type Query_RootJobcareer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobcareer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobcareer_Order_By>>;
  where?: InputMaybe<Jobcareer_Bool_Exp>;
};


export type Query_RootJobcareer_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "jobcareer" */
  jobcareer: Array<Jobcareer>;
  /** fetch aggregated fields from the table: "jobcareer" */
  jobcareer_aggregate: Jobcareer_Aggregate;
  /** fetch data from the table: "jobcareer" using primary key columns */
  jobcareer_by_pk?: Maybe<Jobcareer>;
};


export type Subscription_RootJobcareerArgs = {
  distinct_on?: InputMaybe<Array<Jobcareer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobcareer_Order_By>>;
  where?: InputMaybe<Jobcareer_Bool_Exp>;
};


export type Subscription_RootJobcareer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobcareer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobcareer_Order_By>>;
  where?: InputMaybe<Jobcareer_Bool_Exp>;
};


export type Subscription_RootJobcareer_By_PkArgs = {
  id: Scalars['Int'];
};

export type FetchAllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllJobsQuery = { __typename?: 'query_root', jobcareer: Array<{ __typename?: 'jobcareer', id: number, jobName: string, jobStatus: boolean, jobDescription?: string | null | undefined }> };

export type GetDetailJobsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetDetailJobsQuery = { __typename?: 'query_root', jobcareer_by_pk?: { __typename?: 'jobcareer', jobDescription?: string | null | undefined, jobName: string } | null | undefined };

export type AddJobsMutationVariables = Exact<{
  jobName: Scalars['String'];
  jobStatus: Scalars['Boolean'];
}>;


export type AddJobsMutation = { __typename?: 'mutation_root', insert_jobcareer_one?: { __typename?: 'jobcareer', id: number, jobName: string, jobStatus: boolean, jobDescription?: string | null | undefined } | null | undefined };


export const FetchAllJobsDocument = gql`
    query FetchAllJobs {
  jobcareer {
    id
    jobName
    jobStatus
    jobDescription
  }
}
    `;

/**
 * __useFetchAllJobsQuery__
 *
 * To run a query within a React component, call `useFetchAllJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllJobsQuery(baseOptions?: Apollo.QueryHookOptions<FetchAllJobsQuery, FetchAllJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllJobsQuery, FetchAllJobsQueryVariables>(FetchAllJobsDocument, options);
      }
export function useFetchAllJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllJobsQuery, FetchAllJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllJobsQuery, FetchAllJobsQueryVariables>(FetchAllJobsDocument, options);
        }
export type FetchAllJobsQueryHookResult = ReturnType<typeof useFetchAllJobsQuery>;
export type FetchAllJobsLazyQueryHookResult = ReturnType<typeof useFetchAllJobsLazyQuery>;
export type FetchAllJobsQueryResult = Apollo.QueryResult<FetchAllJobsQuery, FetchAllJobsQueryVariables>;
export const GetDetailJobsDocument = gql`
    query GetDetailJobs($id: Int!) {
  jobcareer_by_pk(id: $id) {
    jobDescription
    jobName
  }
}
    `;

/**
 * __useGetDetailJobsQuery__
 *
 * To run a query within a React component, call `useGetDetailJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDetailJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDetailJobsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDetailJobsQuery(baseOptions: Apollo.QueryHookOptions<GetDetailJobsQuery, GetDetailJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDetailJobsQuery, GetDetailJobsQueryVariables>(GetDetailJobsDocument, options);
      }
export function useGetDetailJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDetailJobsQuery, GetDetailJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDetailJobsQuery, GetDetailJobsQueryVariables>(GetDetailJobsDocument, options);
        }
export type GetDetailJobsQueryHookResult = ReturnType<typeof useGetDetailJobsQuery>;
export type GetDetailJobsLazyQueryHookResult = ReturnType<typeof useGetDetailJobsLazyQuery>;
export type GetDetailJobsQueryResult = Apollo.QueryResult<GetDetailJobsQuery, GetDetailJobsQueryVariables>;
export const AddJobsDocument = gql`
    mutation AddJobs($jobName: String!, $jobStatus: Boolean!) {
  insert_jobcareer_one(object: {jobName: $jobName, jobStatus: $jobStatus}) {
    id
    jobName
    jobStatus
    jobDescription
  }
}
    `;
export type AddJobsMutationFn = Apollo.MutationFunction<AddJobsMutation, AddJobsMutationVariables>;

/**
 * __useAddJobsMutation__
 *
 * To run a mutation, you first call `useAddJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addJobsMutation, { data, loading, error }] = useAddJobsMutation({
 *   variables: {
 *      jobName: // value for 'jobName'
 *      jobStatus: // value for 'jobStatus'
 *   },
 * });
 */
export function useAddJobsMutation(baseOptions?: Apollo.MutationHookOptions<AddJobsMutation, AddJobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddJobsMutation, AddJobsMutationVariables>(AddJobsDocument, options);
      }
export type AddJobsMutationHookResult = ReturnType<typeof useAddJobsMutation>;
export type AddJobsMutationResult = Apollo.MutationResult<AddJobsMutation>;
export type AddJobsMutationOptions = Apollo.BaseMutationOptions<AddJobsMutation, AddJobsMutationVariables>;