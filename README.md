# Bug reproduction

On Mikro 6.4.1

1. docker build . -t mikro-error:v1
2. docker run --env-file ./env.file -t mikro-error:v1
3. Error thrown:

```
[Nest] 1  - 12/13/2024, 5:38:21 PM   ERROR [ExceptionHandler] Source file './dist/shared/crud/base.entity.ts' not found. Check your 'entitiesTs' option and verify you have 'compilerOptions.declaration' enabled in your 'tsconfig.json'. If you are using webpack, see https://bit.ly/35pPDNn
MetadataError: Source file './dist/shared/crud/base.entity.ts' not found. Check your 'entitiesTs' option and verify you have 'compilerOptions.declaration' enabled in your 'tsconfig.json'. If you are using webpack, see https://bit.ly/35pPDNn
    at TsMorphMetadataProvider.getSourceFile (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:134:19)
    at TsMorphMetadataProvider.getExistingSourceFile (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:23:21)
    at TsMorphMetadataProvider.getExistingSourceFile (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:20:77)
    at TsMorphMetadataProvider.readTypeFromSource (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:79:29)
    at TsMorphMetadataProvider.initPropertyType (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:62:50)
    at TsMorphMetadataProvider.initProperties (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:30:22)
    at TsMorphMetadataProvider.loadEntityMetadata (/node_modules/@mikro-orm/reflection/TsMorphMetadataProvider.js:16:14)
    at MetadataDiscovery.discoverEntity (/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:301:31)
    at MetadataDiscovery.discoverDirectories (/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:215:18)
    at async MetadataDiscovery.discover (/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:43:9)
```

On Mikro 6.3.1

1. docker build . -t mikro-error:v2
2. docker run --env-file ./env.file -t mikro-error:v2
3. Entities processing is fine

```
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [InstanceLoader] MikroOrmModule dependencies initialized +1ms
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [InstanceLoader] TerminusModule dependencies initialized +0ms
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [InstanceLoader] SharedModule dependencies initialized +0ms
[Nest] 1  - 12/13/2024, 5:41:02 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 1  - 12/13/2024, 5:41:02 PM   ERROR [ExceptionHandler] 
AggregateError [ECONNREFUSED]: 
    at internalConnectMultiple (node:net:1118:18)
    at afterConnectMultiple (node:net:1685:7)
```
