import { useEffect, useCallback, useState } from 'react';
import BaseInput from 'components/common/BaseInput';
import BaseButton from 'components/common/BaseButton';
import BaseSelectInput from 'components/common/BaseSelectInput';
import { useFormik } from 'formik';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getChains, getRegistry } from 'services/contractRegistryQueries';
import BaseText from 'components/common/BaseText';
import BasePill from 'components/common/BasePill';
import { validationFormSchema } from 'utils/validateFormSchema';
import BaseLoading from 'components/common/BaseLoading';
import FadeIn from 'components/common/FadeIn';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { getIconNetworks } from 'utils/getIconNetworks';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const [optionsNetworks, setOptionsNetworks]: any = useState([]);
  const [isLoading, setIsLoading]: any = useState(false);
  const [jsonData, setJsonData]: any = useState(null);

  const getChainsList = async () => {
    const response: any = await getChains();
    const networks: any = [];
    response.data.forEach((chain_name: string) => {
      networks.push({ label: chain_name, value: chain_name });
    });

    setOptionsNetworks(networks);
  };

  useEffect(() => {
    if (optionsNetworks.length === 0) {
      getChainsList();
    }
  });

  const AddressessSelectComponent = useCallback((props: { data: { label: string } }) => {
    const { data, innerRef, innerProps }: any = props;
    return (
      <div ref={innerRef} {...innerProps} className={styles.selectOptions}>
        {getIconNetworks(data.label)}
        <BaseText bold size={18} text={data.label} className={styles.selectTitle} />
      </div>
    );
  }, []);

  const formik = useFormik({
    initialValues: { codeId: '', network: '' },
    validationSchema: validationFormSchema,
    onSubmit: async (values: any) => {
      setJsonData(null);
      setIsLoading(true);
      const response = await getRegistry(values.network, values.codeId);
      setJsonData(response.data);
      setIsLoading(false);
    },
  });

  const { handleChange, handleSubmit, values, setFieldValue, errors }: any = formik;

  const verifiedText = jsonData?.verified ? 'Is verified' : 'Not verified';
  const varifiesColorPill = jsonData?.verified ? '#91e697' : '#cf1124';
  const varifiesColorTextPill = jsonData?.verified ? '#1e1e20' : '#ffffff';
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Contract registry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <BaseSelectInput
            label="Networks"
            inputName="network"
            value={values.network}
            options={optionsNetworks}
            placeholder="Select network"
            setFieldValue={setFieldValue}
            errorMessage={errors.network || ''}
            myCustomOptions={AddressessSelectComponent}
          />
          <BaseInput
            marginTop={30}
            label="Code id"
            inputName="codeId"
            value={values.codeId}
            handleChange={handleChange}
            placeholder="Enter code id"
            errorMessage={errors.codeId || ''}
          />
          <div className={styles.submitContainer}>
            <BaseButton keyPress="Enter" text="Search" onClick={handleSubmit} />
            <div className={styles.containerPill}>
              {jsonData && (
                <BasePill
                  text={verifiedText}
                  color={varifiesColorTextPill}
                  backgroundColor={varifiesColorPill}
                />
              )}
            </div>
          </div>
          {isLoading ? (
            <BaseLoading center />
          ) : (
            <>
              {jsonData && (
                <FadeIn>
                  <pre className={styles.json}>{JSON.stringify(jsonData, null, 2)}</pre>
                </FadeIn>
              )}
            </>
          )}
          <div className={styles.infoBox}>Steps to registry... ?</div>
        </form>
      </main>
      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.socialMediaLinks}
          href="https://github.com/teamscanworks/codebreaker"
        >
          <AiFillGithub size={30} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.socialMediaLinks}
          href="https://twitter.com/scanworks_"
        >
          <AiFillTwitterCircle size={30} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
