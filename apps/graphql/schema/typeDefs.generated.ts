import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 34, end: 42 } },
      directives: [],
      loc: { start: 27, end: 42 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 48, end: 53 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "info", loc: { start: 58, end: 62 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 64, end: 70 },
              },
              loc: { start: 64, end: 70 },
            },
            loc: { start: 64, end: 71 },
          },
          directives: [],
          loc: { start: 58, end: 71 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "feed", loc: { start: 74, end: 78 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filterNeedle",
                loc: { start: 79, end: 91 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 93, end: 99 },
                },
                loc: { start: 93, end: 99 },
              },
              directives: [],
              loc: { start: 79, end: 99 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 101, end: 105 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 107, end: 110 },
                },
                loc: { start: 107, end: 110 },
              },
              directives: [],
              loc: { start: 101, end: 110 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 112, end: 116 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 118, end: 121 },
                },
                loc: { start: 118, end: 121 },
              },
              directives: [],
              loc: { start: 112, end: 121 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Link",
                    loc: { start: 125, end: 129 },
                  },
                  loc: { start: 125, end: 129 },
                },
                loc: { start: 125, end: 130 },
              },
              loc: { start: 124, end: 131 },
            },
            loc: { start: 124, end: 132 },
          },
          directives: [],
          loc: { start: 74, end: 132 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comment",
            loc: { start: 135, end: 142 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 143, end: 145 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 147, end: 149 },
                  },
                  loc: { start: 147, end: 149 },
                },
                loc: { start: 147, end: 150 },
              },
              directives: [],
              loc: { start: 143, end: 150 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Comment",
              loc: { start: 153, end: 160 },
            },
            loc: { start: 153, end: 160 },
          },
          directives: [],
          loc: { start: 135, end: 160 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "link", loc: { start: 163, end: 167 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 168, end: 170 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 172, end: 174 },
                  },
                  loc: { start: 172, end: 174 },
                },
                loc: { start: 172, end: 175 },
              },
              directives: [],
              loc: { start: 168, end: 175 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Link",
              loc: { start: 178, end: 182 },
            },
            loc: { start: 178, end: 182 },
          },
          directives: [],
          loc: { start: 163, end: 182 },
        },
      ],
      loc: { start: 43, end: 184 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 191, end: 199 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postLink",
            loc: { start: 204, end: 212 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "url",
                loc: { start: 213, end: 216 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 218, end: 224 },
                  },
                  loc: { start: 218, end: 224 },
                },
                loc: { start: 218, end: 225 },
              },
              directives: [],
              loc: { start: 213, end: 225 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 227, end: 238 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 240, end: 246 },
                  },
                  loc: { start: 240, end: 246 },
                },
                loc: { start: 240, end: 247 },
              },
              directives: [],
              loc: { start: 227, end: 247 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Link",
                loc: { start: 250, end: 254 },
              },
              loc: { start: 250, end: 254 },
            },
            loc: { start: 250, end: 255 },
          },
          directives: [],
          loc: { start: 204, end: 255 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postCommentOnLink",
            loc: { start: 258, end: 275 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "linkId",
                loc: { start: 276, end: 282 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 284, end: 286 },
                  },
                  loc: { start: 284, end: 286 },
                },
                loc: { start: 284, end: 287 },
              },
              directives: [],
              loc: { start: 276, end: 287 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "body",
                loc: { start: 289, end: 293 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 295, end: 301 },
                  },
                  loc: { start: 295, end: 301 },
                },
                loc: { start: 295, end: 302 },
              },
              directives: [],
              loc: { start: 289, end: 302 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 305, end: 312 },
              },
              loc: { start: 305, end: 312 },
            },
            loc: { start: 305, end: 313 },
          },
          directives: [],
          loc: { start: 258, end: 313 },
        },
      ],
      loc: { start: 186, end: 315 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Link", loc: { start: 322, end: 326 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 331, end: 333 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 335, end: 337 },
              },
              loc: { start: 335, end: 337 },
            },
            loc: { start: 335, end: 338 },
          },
          directives: [],
          loc: { start: 331, end: 338 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 341, end: 352 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 354, end: 360 },
              },
              loc: { start: 354, end: 360 },
            },
            loc: { start: 354, end: 361 },
          },
          directives: [],
          loc: { start: 341, end: 361 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 364, end: 367 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 369, end: 375 },
              },
              loc: { start: 369, end: 375 },
            },
            loc: { start: 369, end: 376 },
          },
          directives: [],
          loc: { start: 364, end: 376 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 379, end: 387 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Comment",
                    loc: { start: 390, end: 397 },
                  },
                  loc: { start: 390, end: 397 },
                },
                loc: { start: 390, end: 398 },
              },
              loc: { start: 389, end: 399 },
            },
            loc: { start: 389, end: 400 },
          },
          directives: [],
          loc: { start: 379, end: 400 },
        },
      ],
      loc: { start: 317, end: 402 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 409, end: 416 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 421, end: 423 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 425, end: 427 },
              },
              loc: { start: 425, end: 427 },
            },
            loc: { start: 425, end: 428 },
          },
          directives: [],
          loc: { start: 421, end: 428 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 431, end: 440 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 442, end: 448 },
              },
              loc: { start: 442, end: 448 },
            },
            loc: { start: 442, end: 449 },
          },
          directives: [],
          loc: { start: 431, end: 449 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 452, end: 456 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 458, end: 464 },
              },
              loc: { start: 458, end: 464 },
            },
            loc: { start: 458, end: 465 },
          },
          directives: [],
          loc: { start: 452, end: 465 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "link", loc: { start: 468, end: 472 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Link",
                loc: { start: 474, end: 478 },
              },
              loc: { start: 474, end: 478 },
            },
            loc: { start: 474, end: 479 },
          },
          directives: [],
          loc: { start: 468, end: 479 },
        },
      ],
      loc: { start: 404, end: 481 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 494, end: 499 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "hello", loc: { start: 504, end: 509 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Hello",
              loc: { start: 511, end: 516 },
            },
            loc: { start: 511, end: 516 },
          },
          directives: [],
          loc: { start: 504, end: 516 },
        },
      ],
      loc: { start: 482, end: 518 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Hello", loc: { start: 525, end: 530 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 535, end: 542 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 544, end: 550 },
              },
              loc: { start: 544, end: 550 },
            },
            loc: { start: 544, end: 551 },
          },
          directives: [],
          loc: { start: 535, end: 551 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "info", loc: { start: 554, end: 558 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 560, end: 566 },
              },
              loc: { start: 560, end: 566 },
            },
            loc: { start: 560, end: 567 },
          },
          directives: [],
          loc: { start: 554, end: 567 },
        },
      ],
      loc: { start: 520, end: 569 },
    },
  ],
  loc: { start: 0, end: 570 },
} as unknown as DocumentNode;
