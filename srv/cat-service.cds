using test.scp as test from '../db/data-model';

service CatalogService {
    entity Cities @readonly as projection on test.Cities;
}