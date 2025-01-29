import React from 'react';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header, Link } from '@cloudscape-design/components';
import { CCards } from 'react-hook-form-cloudscape';

const schema = yup.object().shape({
  fieldName: yup.array().required('One card must be selected')
});

interface Props {
  onSubmit: (data: any) => void;
}

const Cards: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Cards component usage example">
          Cards
        </Header>
      }
    >
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" onClick={() => reset()}>
                Reset
              </Button>
              <Button variant="primary">Submit</Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween size="s">
              <FormField label="Cards" errorText={get(errors, `fieldName.message`)}>
                <CCards
                  name="fieldName"
                  control={control}
                  selectionType="single"
                  trackBy="name"
                  cardDefinition={{
                    header: item => (
                      <Link href="#" fontSize="heading-m">
                        {item.name}
                      </Link>
                    ),
                    sections: [
                      {
                        id: "description",
                        header: "Description",
                        content: item => item.description
                      },
                      {
                        id: "type",
                        header: "Type",
                        content: item => item.type
                      },
                      {
                        id: "size",
                        header: "Size",
                        content: item => item.size
                      }
                    ]
                  }}
                  cardsPerRow={[
                    { cards: 1 },
                    { minWidth: 500, cards: 2 }
                  ]}
                  items={[
                    {
                      name: "Item 1",
                      alt: "First",
                      description: "This is the first item",
                      type: "1A",
                      size: "Small"
                    },
                    {
                      name: "Item 2",
                      alt: "Second",
                      description: "This is the second item",
                      type: "1B",
                      size: "Large"
                    },
                    {
                      name: "Item 3",
                      alt: "Third",
                      description: "This is the third item",
                      type: "1A",
                      size: "Large"
                    },
                    {
                      name: "Item 4",
                      alt: "Fourth",
                      description: "This is the fourth item",
                      type: "2A",
                      size: "Small"
                    },
                  ]}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>

  );
};

export default Cards;
