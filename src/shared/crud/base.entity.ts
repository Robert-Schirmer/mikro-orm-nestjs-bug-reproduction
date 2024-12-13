import { Property } from '@mikro-orm/core';

/**
 * Base entity for all entities in the application
 */
export abstract class BaseEntity {
  @Property({ type: 'timestamp(3) with time zone', defaultRaw: 'now()' })
  createdAt: Date = new Date();

  @Property({ type: 'timestamp(3) with time zone', defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
