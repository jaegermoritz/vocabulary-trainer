/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link: Link;
};

export type Hello = {
  __typename?: 'Hello';
  info: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Link = {
  __typename?: 'Link';
  comments: Array<Comment>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postCommentOnLink: Comment;
  postLink: Link;
};


export type MutationPostCommentOnLinkArgs = {
  body: Scalars['String']['input'];
  linkId: Scalars['ID']['input'];
};


export type MutationPostLinkArgs = {
  description: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  feed: Array<Link>;
  hello?: Maybe<Hello>;
  info: Scalars['String']['output'];
  link?: Maybe<Link>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeedArgs = {
  filterNeedle?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLinkArgs = {
  id: Scalars['ID']['input'];
};

export type PostCommentMutationVariables = Exact<{
  body: Scalars['String']['input'];
  linkId: Scalars['ID']['input'];
}>;


export type PostCommentMutation = { __typename?: 'Mutation', postCommentOnLink: { __typename?: 'Comment', id: string, createdAt: string, body: string, link: { __typename?: 'Link', id: string } } };

export type PostLinkMutationVariables = Exact<{
  description: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;


export type PostLinkMutation = { __typename?: 'Mutation', postLink: { __typename?: 'Link', id: string, description: string, url: string } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const PostCommentDocument = new TypedDocumentString(`
    mutation PostComment($body: String!, $linkId: ID!) {
  postCommentOnLink(body: $body, linkId: $linkId) {
    id
    createdAt
    body
    link {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<PostCommentMutation, PostCommentMutationVariables>;
export const PostLinkDocument = new TypedDocumentString(`
    mutation PostLink($description: String!, $url: String!) {
  postLink(description: $description, url: $url) {
    id
    description
    url
  }
}
    `) as unknown as TypedDocumentString<PostLinkMutation, PostLinkMutationVariables>;